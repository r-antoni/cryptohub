const TrendingCategories = (cat:any) => {
  return (
        <div>
            <p>{cat.cat.name}</p>
            <span>{cat.cat.data.market_cap}</span>
            <span>{cat.cat.data.total_volume}</span>
            <span>{cat.cat.data.market_cap_change_percentage_24h.usd}</span>
            <img src={cat.cat.data.sparkline} alt="category sparkline" />
        </div>
  )
}

export default TrendingCategories