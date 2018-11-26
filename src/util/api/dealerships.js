import mockDealerShips from "./data/dealerships";

export const fetchDealerships = ({
    request = {},
    mockProps = [],
    shouldFail = false
  } = {}) => { 
    return new Promise((res,rej) => {
      window.setTimeout(() => {
        if (shouldFail) {
          rej();
        } else {
          return res({
                    data: mockDealerShips.mockDealerShips,
                    mockRequest: request
                  });
        }
      }, 1500);
    })
};