const order=[
    {"orderId":201, "customerName":"Tom", "ProductName":"Cisca", "Quantity":2000, "Price":90000},
    {"orderId":301, "customerName":"Jack", "ProductName":"Asus", "Quantity":1000, "Price":80000},
    {"orderId":401, "customerName":"Jay", "ProductName":"Acer", "Quantity":3000, "Price":70000},
    
]

const totalSale= order.reduce((total,order)=>{
    return total+(order.Quantity*order.Price)
},0)
console.log("Total Sales Amount:",totalSale);

