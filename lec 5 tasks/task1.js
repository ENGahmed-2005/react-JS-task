function calculateHallProfit(hoursPerDay, hourlyRate) {
    let operatingCostRate;
    if(hourlyRate == 30) {
        operatingCostRate = 0.4;
    }else if(hourlyRate == 50) {
        operatingCostRate = 0.15;
    }
    let dailyRevenue = hoursPerDay * hourlyRate;
    let weeklyRevenue = dailyRevenue * 6;
    let monthlyRevenue = weeklyRevenue * 4;
    let weeklyCost = weeklyRevenue * operatingCostRate;
    let weeklyProfit = weeklyRevenue - weeklyCost;
    let monthlyCost = monthlyRevenue * operatingCostRate;
    let monthlyProfit = monthlyRevenue - monthlyCost;
    console.log("Daily Revenue:", dailyRevenue);
    console.log("Weekly Revenue:", weeklyRevenue);
    console.log("Monthly Revenue:", monthlyRevenue);
    console.log("Weekly Cost:", weeklyCost);
    console.log("Monthly Cost:", monthlyCost);
    console.log("Weekly Profit:", weeklyProfit);
    console.log("Monthly Profit:", monthlyProfit);
}
calculateHallProfit(6, 50);