import { useState, useEffect, useRef } from 'react';

export default function PixelGame() {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [level, setLevel] = useState(1);
    const gameStateRef = useRef({
        player: { x: 50, y: 200, width: 16, height: 16, velocityY: 0, jumping: false },
        platforms: [
            { x: 0, y: 280, width: 800, height: 20 },
            { x: 150, y: 220, width: 100, height: 10 },
            { x: 300, y: 180, width: 80, height: 10 },
            { x: 450, y: 140, width: 100, height: 10 },
            { x: 600, y: 200, width: 120, height: 10 }
        ],
        coins: [
            { x: 180, y: 190, collected: false },
            { x: 330, y: 150, collected: false },
            { x: 480, y: 110, collected: false },
            { x: 640, y: 170, collected: false }
        ],
        enemies: [
            { x: 200, y: 200, width: 12, height: 12, direction: 1, speed: 1 },
            { x: 500, y: 120, width: 12, height: 12, direction: 1, speed: 1.5 }
        ],
        keys: {},
        gravity: 0.5,
        jumpStrength: -10,
        moveSpeed: 2.5,
        cameraX: 0
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const game = gameStateRef.current;
        let animationId;

        const handleKeyDown = (e) => {
            game.keys[e.key] = true;
            if ((e.key === ' ' || e.key === 'w' || e.key === 'W') && !game.player.jumping) {
                game.player.velocityY = game.jumpStrength;
                game.player.jumping = true;
            }
            if (e.key === 'r' && gameOver) {
                resetGame();
            }
        };

        const handleKeyUp = (e) => {
            game.keys[e.key] = false;
        };

        const resetGame = () => {
            game.player = { x: 50, y: 200, width: 16, height: 16, velocityY: 0, jumping: false };
            game.coins.forEach(coin => coin.collected = false);
            game.cameraX = 0;
            setScore(0);
            setLevel(1);
            setGameOver(false);
            generateLevel(1);
        };

        const generateLevel = (lvl) => {
            // Generate platforms
            const numPlatforms = 4 + lvl;
            game.platforms = [{ x: 0, y: 280, width: 800, height: 20 }];

            for (let i = 0; i < numPlatforms; i++) {
                game.platforms.push({
                    x: 150 + i * 120,
                    y: 220 - (i % 3) * 40,
                    width: 80 + Math.random() * 40,
                    height: 10
                });
            }

            // Generate coins
            const numCoins = 4 + lvl;
            game.coins = [];
            for (let i = 0; i < numCoins; i++) {
                game.coins.push({
                    x: 180 + i * 130,
                    y: 160 - (i % 3) * 30,
                    collected: false
                });
            }

            // Generate enemies - make sure they don't overlap with platforms
            const numEnemies = 2 + Math.floor(lvl / 2);
            game.enemies = [];
            for (let i = 0; i < numEnemies; i++) {
                // Position enemies between platforms, not on them
                const enemyX = 100 + i * 280 + (Math.random() * 50);
                const enemyY = 240 - (i % 2) * 80;

                game.enemies.push({
                    x: enemyX,
                    y: enemyY,
                    width: 12,
                    height: 12,
                    direction: i % 2 === 0 ? 1 : -1,
                    speed: 1 + (lvl * 0.2),
                    minX: enemyX - 60,
                    maxX: enemyX + 60
                });
            }
        };

        const checkCollision = (rect1, rect2) => {
            return rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y;
        };

        const gameLoop = () => {
            if (gameOver) return;

            // Clear canvas
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars background
            for (let i = 0; i < 50; i++) {
                const x = (i * 37) % canvas.width;
                const y = (i * 53) % canvas.height;
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(x, y, 1, 1);
            }

            // Player movement
            if (game.keys['ArrowLeft'] || game.keys['a']) {
                game.player.x -= game.moveSpeed;
            }
            if (game.keys['ArrowRight'] || game.keys['d']) {
                game.player.x += game.moveSpeed;
            }

            // Check if near any coin and apply subtle magnetic assist (only when NOT pressing keys)
            const isMoving = game.keys['ArrowLeft'] || game.keys['a'] || game.keys['ArrowRight'] || game.keys['d'];

            if (!isMoving) {
                game.coins.forEach(coin => {
                    if (!coin.collected) {
                        const coinCenterX = coin.x + 4; // Coin center
                        const playerCenterX = game.player.x + 8; // Player center
                        const horizontalDistance = Math.abs(coinCenterX - playerCenterX);
                        const verticalDistance = Math.abs(coin.y - game.player.y);

                        // Only apply gentle pull when very close (within 12px) and below the coin
                        if (horizontalDistance < 12 && horizontalDistance > 1 && verticalDistance < 50 && game.player.y > coin.y) {
                            const pullStrength = 0.3; // Gentle magnetic pull
                            if (playerCenterX < coinCenterX) {
                                game.player.x += pullStrength;
                            } else {
                                game.player.x -= pullStrength;
                            }
                        }
                    }
                });
            }

            // Apply gravity
            game.player.velocityY += game.gravity;
            game.player.y += game.player.velocityY;

            // Platform collision
            let onGround = false;
            game.platforms.forEach(platform => {
                if (checkCollision(game.player, platform) && game.player.velocityY > 0) {
                    game.player.y = platform.y - game.player.height;
                    game.player.velocityY = 0;
                    game.player.jumping = false;
                    onGround = true;
                }
            });

            // Camera follow
            if (game.player.x > 300) {
                game.cameraX = game.player.x - 300;
            } else {
                game.cameraX = 0;
            }

            // Draw platforms
            ctx.fillStyle = '#16a085';
            game.platforms.forEach(platform => {
                ctx.fillRect(platform.x - game.cameraX, platform.y, platform.width, platform.height);
                // Add pixel texture
                for (let i = 0; i < platform.width; i += 8) {
                    ctx.fillStyle = '#1abc9c';
                    ctx.fillRect(platform.x - game.cameraX + i, platform.y, 4, 4);
                }
            });

            // Update and draw enemies
            game.enemies.forEach(enemy => {
                enemy.x += enemy.direction * enemy.speed;

                // Bounce enemies within their defined range
                if (enemy.x < enemy.minX || enemy.x > enemy.maxX) {
                    enemy.direction *= -1;
                }

                // Draw enemy (red pixel creature)
                ctx.fillStyle = '#e74c3c';
                ctx.fillRect(enemy.x - game.cameraX, enemy.y, enemy.width, enemy.height);
                ctx.fillStyle = '#c0392b';
                ctx.fillRect(enemy.x - game.cameraX + 2, enemy.y + 2, 8, 8);
                // Eyes
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(enemy.x - game.cameraX + 3, enemy.y + 4, 2, 2);
                ctx.fillRect(enemy.x - game.cameraX + 7, enemy.y + 4, 2, 2);

                // Check collision with player
                if (checkCollision(game.player, enemy)) {
                    setGameOver(true);
                }
            });

            // Draw and collect coins
            game.coins.forEach(coin => {
                if (!coin.collected) {
                    const t = Date.now() / 200;
                    const offset = Math.sin(t) * 3;

                    // Coin animation
                    ctx.fillStyle = '#f39c12';
                    ctx.fillRect(coin.x - game.cameraX, coin.y + offset, 8, 8);
                    ctx.fillStyle = '#f1c40f';
                    ctx.fillRect(coin.x - game.cameraX + 2, coin.y + offset + 2, 4, 4);

                    if (checkCollision(game.player, { x: coin.x, y: coin.y, width: 8, height: 8 })) {
                        coin.collected = true;
                        setScore(s => s + 10);
                    }
                }
            });

            // Check if all coins collected - level up!
            const allCoinsCollected = game.coins.every(coin => coin.collected);
            if (allCoinsCollected && game.coins.length > 0) {
                setLevel(l => l + 1);
                game.player.x = 50;
                game.player.y = 200;
                game.cameraX = 0;
                generateLevel(level + 1);
            }

            // Draw player (pixel character)
            ctx.fillStyle = '#3498db';
            ctx.fillRect(game.player.x - game.cameraX, game.player.y, game.player.width, game.player.height);
            ctx.fillStyle = '#2980b9';
            ctx.fillRect(game.player.x - game.cameraX + 4, game.player.y + 4, 8, 8);
            // Eyes
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(game.player.x - game.cameraX + 5, game.player.y + 6, 2, 2);
            ctx.fillRect(game.player.x - game.cameraX + 9, game.player.y + 6, 2, 2);

            // Death check
            if (game.player.y > canvas.height) {
                setGameOver(true);
            }

            animationId = requestAnimationFrame(gameLoop);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        gameLoop();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animationId);
        };
    }, [gameOver, level]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-white pixel-font">RETRO QUEST</h1>
                    <div className="flex gap-4">
                        <div className="text-xl font-bold text-green-400">Level: {level}</div>
                        <div className="text-xl font-bold text-yellow-400">Score: {score}</div>
                    </div>
                </div>

                <div className="relative">
                    <canvas
                        ref={canvasRef}
                        width={800}
                        height={300}
                        className="border-4 border-gray-700 rounded"
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-red-500 mb-4">GAME OVER</h2>
                                <p className="text-xl text-white mb-4">Final Score: {score}</p>
                                <button
                                    onClick={() => {
                                        const game = gameStateRef.current;
                                        game.player = { x: 50, y: 200, width: 16, height: 16, velocityY: 0, jumping: false };
                                        game.cameraX = 0;
                                        setScore(0);
                                        setLevel(1);
                                        setGameOver(false);

                                        // Reset to level 1
                                        game.platforms = [
                                            { x: 0, y: 280, width: 800, height: 20 },
                                            { x: 150, y: 220, width: 100, height: 10 },
                                            { x: 300, y: 180, width: 80, height: 10 },
                                            { x: 450, y: 140, width: 100, height: 10 },
                                            { x: 600, y: 200, width: 120, height: 10 }
                                        ];
                                        game.coins = [
                                            { x: 180, y: 190, collected: false },
                                            { x: 330, y: 150, collected: false },
                                            { x: 480, y: 110, collected: false },
                                            { x: 640, y: 170, collected: false }
                                        ];
                                        game.enemies = [
                                            { x: 200, y: 200, width: 12, height: 12, direction: 1, speed: 1, minX: 140, maxX: 260 },
                                            { x: 500, y: 120, width: 12, height: 12, direction: 1, speed: 1.5, minX: 440, maxX: 560 }
                                        ];
                                    }}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
                                >
                                    RESTART (R)
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-4 text-sm text-gray-300 text-center">
                    <p className="mb-2">🎮 Controls:</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span>Arrow Keys / A,D - Move</span>
                        <span>Space / W - Jump</span>
                        <span>R - Restart</span>
                    </div>
                    <p className="mt-2 text-yellow-400">Collect all coins to advance • Avoid red enemies • Don't fall!</p>
                </div>
            </div>
        </div>
    );
}