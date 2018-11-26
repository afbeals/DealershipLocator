const dealershipUtility = {
    /**
     * Returns initial dealership
     * @method buildInitialDealership
     * @return {obj} returns object with initial Dealership props
     */
    buildInitialDealership: () => ({
      id: null,
      name: null,
      dealerships: null
    }),
    /**
     * Returns initial store
     * @method buildInitialStore
     * @return {obj} returns object with initial store props
     */
    buildInitialStore: () => ({
      error: null,
      isLoading: false,
      isLoaded: false,
      dealerships: null
    }),
    /**
     * Returns mock store
     * @method buildMockStore
     * @param {object} props addtional props insert alongside mock data.
     * @return {object} returns mock store
     */
    buildMockStore: (props = {}) => {
      return {
        ...dealershipUtility.buildInitialStore(),
        dealerships: [
            {
                id: 999,
                name: `mock dealership 1`,
                locations: [99,100]
            }
        ],
        props
      };
    }
  };
  
  export default dealershipUtility;
  