const locationUtility = {
    /**
     * Returns initial location
     * @method buildInitialLocation
     * @return {obj} returns object with initial location props
     */
    buildInitialLocation: () => ({
      id: null,
      name: null,
      employees: null
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
      locations: null
    }),
    /**
     * Returns mock store
     * @method buildMockStore
     * @param {object} props addtional props insert alongside mock data.
     * @return {object} returns mock store
     */
    buildMockStore: (props = {}) => {
      return {
        ...locationUtility.buildInitialStore(),
        locations: [
            {
                id: 998,
                name: `mock location 1`,
                employees: [99,100]
            }
        ],
        props
      };
    }
  };
  
  export default locationUtility;
  