(function installCh01OverloadDefinition(global) {
  "use strict";
  const platform = global.ECTPPlatform = global.ECTPPlatform || {}; platform.moduleDefinitions = platform.moduleDefinitions || {};
  platform.moduleDefinitions.createCh01OverloadProtection = (options = {}) => { const circuitData = options.circuitData || platform.chapterCircuitData.ch01OverloadProtection; const port = options.port || platform.moduleRuntimes.createCh01OverloadRuntime(circuitData); return platform.facadeAdapter.createFacadeModuleDefinition({ circuitData, createFacade: () => platform.moduleFacades.createCh01OverloadFacade({ port }), meta: { schemaVersion: "1.0", chapterId: "ch01", moduleId: "ch01_overload_protection", routeId: "ch01-overload-protection", order: 7, code: "07", title: "过载保护", shortTitle: "过载保护", simulationLevel: "S2", maturity: "M3", status: "ready", integrationMode: "facade-v1", geometryLockId: circuitData.geometryLockId }, aliases: ["ch01_overload_protection"] }); };
})(globalThis);
