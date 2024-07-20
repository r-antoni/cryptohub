export function currencyFormat(num:number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
      }).format(num);
    }
