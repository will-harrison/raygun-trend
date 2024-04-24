const calculations = {
  sellThrough: ({ inventorySold, totalInventory }) => {
    return inventorySold / totalInventory;
  },
  avgUnitRetail: ({ totalSalesDollars, salesUnits }) => {
    return totalSalesDollars / salesUnits;
  },
  avgPerStore: ({ salesUnits, storesWithInventory }) => {
    return salesUnits / storesWithInventory;
  },
  grossMarginPercent: ({ cost, retail }) => {
    return ((retail - cost) / retail);
  },
  grossMarginDollars: ({ cost, retail }) => {
    return (retail - cost);
  },
  avgCommitted: ({ totalAvailable, storesWithInventory }) => {
    return totalAvailable / storesWithInventory;
  }
}

export default calculations