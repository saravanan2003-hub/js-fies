function trapRainWater(height) {
    if (height.length === 0) return 0;

    let n = height.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    // Calculate left max for each index
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Calculate right max for each index
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return trappedWater;
}

// Example Usage
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapRainWater(height)); // Output: 6

a