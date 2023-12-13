import Image from "next/image";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

const Address = ({ address, setAddress }) => {
  const [center, setCenter] = useState([53.07910956280803, 36.559345877660625]);
  const [lat, setLat] = useState(36.559345877660625);
  const [lng, setLng] = useState(53.07910956280803);
  const [markerArray, setMarkerArray] = useState([]);

  const draghandler = (e) => {
    console.log(e);
    e._moving = true;
    setCenter([e?.viewState?.longitude, e?.viewState?.latitude]);
  };

  function reverseFunction(e) {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4YmU4YTc5ODhjMWRlYTM3YWZhZDJlMGQ3NTZjMGEzM2M5MzFjZDIyOGQ3ZDJiY2QzNjBkMjcwN2IxNjQ4YTI1YjgwMzBjZTg5MjVmOTgyIn0.eyJhdWQiOiIyNTMxNCIsImp0aSI6Ijk4YmU4YTc5ODhjMWRlYTM3YWZhZDJlMGQ3NTZjMGEzM2M5MzFjZDIyOGQ3ZDJiY2QzNjBkMjcwN2IxNjQ4YTI1YjgwMzBjZTg5MjVmOTgyIiwiaWF0IjoxNzAyNDA5NjgyLCJuYmYiOjE3MDI0MDk2ODIsImV4cCI6MTcwNDkxNTI4Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.s6Et58RQVlmqmAJpJfOC24vXyuX4oIIeasL3CxKGxLBN9EL0NlVuDor5GGVVvGYUxRg3coo0b6FBYSzH3SelSI5T_2ej-Vz-hTCVVXcmJ0HGCRUY_9BuQxvOMS4b8B62kZ5fPuehWSS9t4m2ojSE2W7zcIGfBAdmUsfp7DsfnubBH0a8q7LAKN_GZhRy4pT-7TyiBlSrqsTGu5lOhggmpQEexOFkNkQUaQaBM1jPDH26Wv7GUFLx1oXhJAY7bzpCGFITqC7LSkrnsLWSgC5ejlsn_C178AIVU1Qj9L7CJqiCy4bEm0xUPSyI2Q3LpDdSqM6ags2Cuagivyv-GOApCw",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAddress(data.address);
      });
    const array = [];
    array.push(
      <Marker
        latitude={e.lngLat.lat}
        longitude={e.lngLat.lng}
        anchor="bottom"
        Image={"/assets/img/marker.png"}
      />
    );
    setMarkerArray(array);
  }

  return (
    <div className="w-full h-56 overflow-hidden">
      <Map
        initialViewState={{
          longitude: 53.07910956280803,
          latitude: 36.559345877660625,
          zoom: 17,
        }}
        mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style.json"
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4YmU4YTc5ODhjMWRlYTM3YWZhZDJlMGQ3NTZjMGEzM2M5MzFjZDIyOGQ3ZDJiY2QzNjBkMjcwN2IxNjQ4YTI1YjgwMzBjZTg5MjVmOTgyIn0.eyJhdWQiOiIyNTMxNCIsImp0aSI6Ijk4YmU4YTc5ODhjMWRlYTM3YWZhZDJlMGQ3NTZjMGEzM2M5MzFjZDIyOGQ3ZDJiY2QzNjBkMjcwN2IxNjQ4YTI1YjgwMzBjZTg5MjVmOTgyIiwiaWF0IjoxNzAyNDA5NjgyLCJuYmYiOjE3MDI0MDk2ODIsImV4cCI6MTcwNDkxNTI4Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.s6Et58RQVlmqmAJpJfOC24vXyuX4oIIeasL3CxKGxLBN9EL0NlVuDor5GGVVvGYUxRg3coo0b6FBYSzH3SelSI5T_2ej-Vz-hTCVVXcmJ0HGCRUY_9BuQxvOMS4b8B62kZ5fPuehWSS9t4m2ojSE2W7zcIGfBAdmUsfp7DsfnubBH0a8q7LAKN_GZhRy4pT-7TyiBlSrqsTGu5lOhggmpQEexOFkNkQUaQaBM1jPDH26Wv7GUFLx1oXhJAY7bzpCGFITqC7LSkrnsLWSgC5ejlsn_C178AIVU1Qj9L7CJqiCy4bEm0xUPSyI2Q3LpDdSqM6ags2Cuagivyv-GOApCw",
            },
          };
        }}
        onDrag={(e) => draghandler(e)}
        onClick={reverseFunction}
      >
        {markerArray}
      </Map>
    </div>
  );
};

export default Address;
