export const errorResponse = (
    data: { HTTPHeader: number; errorCode: string; error: string; relatedData: unknown; description: unknown; status: unknown },
    res: {
      status: any;
      send: any;
    },
  ): void => {
    const { HTTPHeader, errorCode, error, relatedData, description, status } = data;
    const Data = {
      errorCode,
      error,
      relatedData,
      description,
      status,
    };
    res.status(HTTPHeader).send(Data);
  };
  
  export const successResponse = (
    data: { HTTPHeader: any; payload: any; status: any; statusCode: any; message: any },
    res: {
      status: (
        arg0: any,
      ) => {
        (): any;
        new (): any;
        send: { (arg0: { status: any; statusCode: any; message: any; data: any }): void; new (): any };
      };
    },
  ): any => {
    const { HTTPHeader, payload, status, statusCode, message } = data;
    const response = {
      status,
      statusCode,
      message,
      data: payload,
    };
    res.status(HTTPHeader).send(response);
  };
  
  export default { errorResponse, successResponse };
  