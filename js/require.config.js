require.config({
  baseUrl: "js/",
  paths: {
      "bootstrap": "bootstrap.min",
      "bootstrap-datepicker": "bootstrap-datepicker.min",
      "googleCharts": "https://www.gstatic.com/charts/loader",
      "jquery": "jquery-3.3.1.min",
      "popper": "popper.min",
      "values": "values"
  },
  shim: {
    bootstrap: {
      deps: ['jquery', 'popper']
    }
  }
});
