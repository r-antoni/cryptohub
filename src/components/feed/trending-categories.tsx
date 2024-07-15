const TrendingCategories = (cat:any) => {
  return (
        <div>
            <p>{cat.cat.name}</p>
            <span>{cat.cat.market_cap}</span>
            <span>{cat.cat.total_volume}</span>
            <span>{cat.cat.change}</span>
            <img src={cat.cat.chart} alt={`${cat.name} sparkline`} />
        </div>
  )
}

export default TrendingCategories