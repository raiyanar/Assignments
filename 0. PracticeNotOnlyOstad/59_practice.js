// ---------- Data ----------
const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

// ---------- Helper: deep clone the ledger ----------

function deepClone(ledger) {
  let clone = {};
  for (const tag in ledger) {
    const device = ledger[tag];
    clone[tag] = {
      type: device.type,
      status: device.status,
      borrower: {
        name: device.borrower.name,
        email: device.borrower.email,
      },
      dueDate: device.dueDate,
    };
  }
  return clone;
}

// ---------- checkoutDevice ----------

function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset Tag ${assetTag} is not found.`,
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Asset Tag ${assetTag} is already CheckedOut!`,
    };
  }
  const updatedLedger = deepClone(ledger);
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Asset Tag ${assetTag} is CheckedOut to ${borrower.name}`,
  };
}

// ---------- checkinDevice ----------

function checkinDevice(ledger, assetTag) {
  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset Tag ${assetTag} is not found!`,
    };
  }

  const updatedLedger = deepClone(ledger);
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Asset Tag ${assetTag} is checkedIn.`,
  };
}

// ---------- Date helpers (no Date object!) ----------
function parseDate(str) {
  const parts = str.split("/");
  return {
    month: Number(parts[0]),
    day: Number(parts[1]),
    year: Number(parts[2]),
  };
}

function compareDates(a, b) {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
}

// ---------- listOverdueDevices ----------

function listOverdueDevices(ledger, today) {
  const todayDate = parseDate(today);
  const due = [];

  for (const tag in ledger) {
    const device = ledger[tag];

    if (device.status === "CheckedOut" && device.dueDate !== "") {
      const dueDate = parseDate(device.dueDate);
      if (compareDates(dueDate, todayDate) < 0) {
        due.push(device);
      }
    }
  }

  due.sort((a, b) => compareDates(parseDate(a.dueDate), parseDate(b.dueDate)));
  return due;
}

// ---------- serializeLedger ----------

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

// ---------- loadLedger ----------

function loadLedger(json) {
  return JSON.parse(json);
}

// ---------- Quick tests ----------

console.log("--- checkout missing tag 99 ---");
console.log(
  checkoutDevice(equipmentLedger, "99", { name: "Nobody", email: "no@x.com" }),
);

console.log("--- checkout already-out tag 1 ---");
console.log(
  checkoutDevice(equipmentLedger, "1", { name: "Someone", email: "s@x.com" }),
);

console.log("--- checkin tag 3 ---");
console.log(checkinDevice(equipmentLedger, "3"));

console.log("--- checkin missing tag 99 ---");
console.log(checkinDevice(equipmentLedger, "99"));

console.log("--- overdue as of 11/15/2025 ---");
console.log(listOverdueDevices(equipmentLedger, "11/15/2025"));

console.log("--- serialize then load ---");
const json = serializeLedger(equipmentLedger);
console.log(json);
console.log(loadLedger(json));

console.log("--- original ledger unchanged? ---");
console.log(equipmentLedger);
