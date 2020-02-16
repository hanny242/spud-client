import React from 'react';


export const getInfo = () => {
    rawgAPI.get("/").then(({ data }) => {
      this.setState({
        results: data.data
      });
    });
  };