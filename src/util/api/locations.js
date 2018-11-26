import mockLocations from "./data/locations";

export const fetchLocations = ({
    request = {},
    mockProps = [],
    shouldFail = false
  } = {}) => {
    return new Promise((res,rej) => {
      window.setTimeout(() => {
        if (shouldFail) {
          rej();
        } else {
            const locations = mockLocations.mockLocations,
                    requestLocations = request.locationList,
                    responseLocations = [];
            [...locations].forEach((location)=>{
                if(requestLocations.includes(location.id)){
                    responseLocations.push(location);
                }
            })
            return res({
                        data: responseLocations,
                        mockRequest: request
                    });
        }
      }, 1500);
    })
};