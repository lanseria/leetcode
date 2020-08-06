const entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

const newObj = {};

const loop = (strKey, nextChild) => {
  if (typeof nextChild === "object") {
    for (const key in nextChild) {
      const element = nextChild[key];
      loop(`${strKey}${key}`, element);
    }
  } else {
    newObj[strKey.split("").join(".")] = nextChild;
    return;
  }
};

loop("", entry);
console.log(newObj);
