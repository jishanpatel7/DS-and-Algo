//you are climbing a stair case. it takes n steps to reach to the top.
//each time you can either climb 1 or 2 steps.in how many distinct ways can you climb to the top.
//input: n = 3
//output: 3
//explanation: there are three ways to climb to the top.
//1. 1 step + 1 step + 1 step
//2. 1 step + 2 steps
//3. 2 steps + 1 step

const climbStairs = (n) => {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    var dp = [0, 1, 2];
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(climbStairs(3));