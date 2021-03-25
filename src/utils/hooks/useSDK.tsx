import { useEffect, useState } from "react";
import { SDK } from "../../sdk";

let sdk: SDK;

export const useGetSDK = () => {
  const [token, setToken] = useState("");
  // const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   getAccessTokenSilently().then((d) => {
  //     setToken(d);
  //   });
  // }, [getAccessTokenSilently, setToken]);

  useEffect(() => {
    sdk = new SDK({
      tenantId: "tenant",
      token: `Bearer ${token}`,
      basePath: "https://",
    });
  }, [token]);

  return sdk;
};

export const useSDK = <T extends unknown>(
  callFunction: (sdk: SDK) => Promise<T>,
  dependencies: any[] = [],
  disable?: boolean,
  defaultValue = {}
) => {
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(defaultValue as T);
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState({
    loading: true,
    data: defaultValue as T,
  });
  // const { getAccessTokenSilently } = useAuth0();
  // SDK
  useEffect(() => {
    setLoading(true);
    const callAPI = async () => {
      // const token = await getAccessTokenSilently();
      const token = "";
      const _sdk = new SDK({
        tenantId: "tenant",
        token: `Bearer ${token}`,
        basePath: "https://",
      });
      let d: any;

      d = await callFunction(_sdk);

      setPayload({ loading: false, data: d });
      setLoading(false);
      setData(d);
    };
    if (!disable) {
      try {
        callAPI();
        setHasError(false);
      } catch (e) {
        setHasError(true);
      }
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
  return { data, loading, error: hasError, payload };
};
