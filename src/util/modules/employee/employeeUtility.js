const employeeUtility = {
    /**
     * Returns initial employee
     * @method buildInitialEmployee
     * @return {obj} returns object with initial employee props
     */
    buildInitialEmployee: () => ({
      id: null,
      name: null
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
      employees: null
    }),
    /**
     * Returns mock store
     * @method buildMockStore
     * @param {object} props addtional props insert alongside mock data.
     * @return {object} returns mock store
     */
    buildMockStore: (props = {}) => {
      return {
        ...employeeUtility.buildInitialStore(),
        employees: [
            {
                id: 997,
                name: `mock employee 1`
            }
        ],
        props
      };
    }
  };
  
  export default employeeUtility;
  