const os = require("os");

setInterval(() => {
  const { arch, freemem, platform, totalmem } = os;
  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalMem: `${parseInt(totalmem() / 1024 / 1024)} MB`,
    FreeMem: `${parseInt(freemem() / 1024 / 1024)} MB`,
    Usage: `${parseInt(((freemem() / totalmem()) * 100).toFixed(2))}%`,
  };
  exports.stats = stats;
}, 1000);
