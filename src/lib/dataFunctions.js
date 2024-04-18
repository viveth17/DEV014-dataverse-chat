export const filterData = (data, filterBy, value) => {

    const filteredData = data.filter(item => {
      const filterParts = filterBy.split('.');
      let obj = item;
      for (let i = 0; i < filterParts.length; i++) {
        obj = obj[filterParts[i]];
      }
      return obj === value;
    });
    
    return filteredData;
  };
  
  
  export const sortBySharkSize = (data, sortBy, sortOrder) => {
  
    const sortedData = data.sort((a, b) => {
      let sizeA, sizeB;
  
      if (sortBy) {
        sizeA = a[sortBy];
        sizeB = b[sortBy];
      } else {
        sizeA = a.maximumSizeMtr;
        sizeB = b.maximumSizeMtr;
      }
  
      const compareValue = sortOrder === 'desc' ? -1 : 1;
  
      if (sizeA < sizeB) {
        return -1 * compareValue;
      }
      if (sizeA > sizeB) {
        return 1 * compareValue;
      }
      return 0;
    });
  
    return sortedData;
  };
  
  export const computeStats = (data) => {
    const longevity = data.map(item => item.facts.approximateLongevity);
    const totalLongevity = longevity.reduce((acc,cur) => acc + cur, 0);
    const averageLongevity = (totalLongevity/longevity.length).toFixed(2);
    return averageLongevity;
  }