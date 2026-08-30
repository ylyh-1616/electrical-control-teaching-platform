(function installCh01ReverseDefinition(global) {
  "use strict";
  const platform = global.ECTPPlatform = global.ECTPPlatform || {};
  platform.moduleDefinitions = platform.moduleDefinitions || {};
  platform.moduleDefinitions.createCh01ReverseControl = (options = {}) => {
    const circuitData = options.circuitData || platform.chapterCircuitData.ch01ReverseControl;
    const port = options.port || platform.moduleRuntimes.createCh01ReverseRuntime(circuitData);
    return platform.facadeAdapter.createFacadeModuleDefinition({ circuitData, createFacade: () => platform.moduleFacades.createCh01ReverseFacade({ port }), meta: { schemaVersion: "1.0", chapterId: "ch01", moduleId: "ch01_reverse_control", routeId: "ch01-reverse-control", order: 6, code: "06", title: "正反转控制", shortTitle: "正反转控制", simulationLevel: "S2", maturity: "M3", status: "ready", integrationMode: "facade-v1", geometryLockId: circuitData.geometryLockId }, aliases: ["ch01_reverse_control"] });
  };
})(globalThis);
