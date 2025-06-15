window.showModelParameters = function () {
  const checkReady = setInterval(() => {
    const manager = window.LAppLive2DManager?.getInstance?.();
    if (!manager) {
      console.log("⏳ รอโมเดล...");
      return; // ยังไม่พร้อม → รอวนไปก่อน
    }

    clearInterval(checkReady); // หยุดรอ

    const model = manager.getModel?.(0);
    if (!model || !model._model) {
      console.warn("❌ ไม่พบโมเดลหรือ CoreModel (_model)");
      return;
    }

    const coreModel = model._model;
    const paramCount = coreModel.getParameterCount();
    console.log(`🔍 พบทั้งหมด ${paramCount} พารามิเตอร์`);
    for (let i = 0; i < paramCount; i++) {
      console.log(`Param[${i}]:`, coreModel.getParameterId(i));
    }
  }, 200); // เช็กทุก 200ms
};
