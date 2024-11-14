// import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs8';
// export default class reporter extends CucumberJSAllureFormatter {
//   constructor(options: any) {
//     super(options, new AllureRuntime({ resultsDir: './allure-results' }), {
//       labels: {
//         epic: [/@feature:(.*)/],
//         severity: [/@severity:(.*)/],
//       },
//       links: {
//         issue: {
//           pattern: [/@issue=(.*)/],
//           urlTemplate: 'http://localhost:8080/issue/%s',
//         },
//         tms: {
//           pattern: [/@tms=(.*)/],
//           urlTemplate: 'http://localhost:8080/tms/%s',
//         },
//       },
//     });
//   }
// }

import { CucumberJSAllureFormatter } from "allure-cucumberjs";
import { AllureRuntime } from "allure-cucumberjs";

export default function Reporter(options:any) {
  return new CucumberJSAllureFormatter(
      options,
      new AllureRuntime({ resultsDir: "./allure-results" }),
      {}
  );
}
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;

