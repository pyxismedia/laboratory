import { async } from "@angular/core/testing";
import { Store } from "./Store";

enum Keys {
  LOREM = "lorem",
  IPSUM = "ipsum",
  DOLOR = "dolor",
  SIT = "sit",
  AMET = "amet",
  ADDED = "added",
}

enum AddedOptions {
  ADDED = "Added",
  READDED = "Re-Added"
}

interface StoreState {
  lorem: string;
  ipsum: {
    dolor: string,
    sit: {
      amet: string,
    }
  };
  added: AddedOptions;
}

describe("AppComponent", () => {
  let state: StoreState;
  let store: Store<StoreState>;

  describe("select method", () => {
    beforeEach(async(() => {
      state = {
        lorem: "Lorem",
        ipsum: {
          dolor: "Dolor",
          sit: {
            amet: "Amet",
          }
        },
        added: AddedOptions.ADDED
      };

      store = new Store(state);
    }));

    it("should be possible to select value and get observable from that", (done) => {
      store.select(Keys.LOREM).subscribe((value) => {
        expect(value).toEqual("Lorem");
        done();
      });
    });

    it("should be possible to select deep value of 2nd level and get observable from that", (done) => {
      store.select(Keys.IPSUM, Keys.SIT).subscribe((value) => {
        expect(value).toEqual({ amet: "Amet" });
        done();
      });
    });

    it("should be possible to select deep value of 2nd level and get observable from that", (done) => {
      store.select(Keys.IPSUM, Keys.SIT, Keys.AMET).subscribe((value) => {
        expect(value).toEqual("Amet");
        done();
      });
    });
  });

  describe("next method", () => {
    beforeEach(async(() => {
      state = {
        lorem: "Lorem",
        ipsum: {
          dolor: "Dolor",
          sit: {
            amet: "Amet",
          }
        },
        added: AddedOptions.ADDED
      };

      store = new Store(state);
    }));
    it("should be possible to set next state for existing key", (done) => {
      store.next({ [Keys.ADDED]: AddedOptions.READDED });
      store.select(Keys.ADDED).subscribe((data: AddedOptions) => {
        expect(data).toEqual(AddedOptions.READDED);
        done();
      });
    });
  });

  describe("state$ property", () => {
    beforeEach(async(() => {
      state = {
        lorem: "Lorem",
        ipsum: {
          dolor: "Dolor",
          sit: {
            amet: "Amet",
          }
        },
        added: AddedOptions.ADDED
      };

      store = new Store(state);
    }));
    it("should have access to whole current state", (done) => {
      store.state$.subscribe((data) => {
        expect(data).toEqual(state);
        done();
      });
    });
  });

  describe("snapshot", () => {
    beforeEach(async(() => {
      state = {
        lorem: "Lorem",
        ipsum: {
          dolor: "Dolor",
          sit: {
            amet: "Amet",
          }
        },
        added: AddedOptions.ADDED
      };

      store = new Store(state);
    }));
    it("should be possible to access whole snapshot", () => {
      const snapshot = store.snapshot();
      expect(snapshot).toEqual(state);
    });

    it("should be possible to access 1st level snapshot", () => {
      const snapshot = store.snapshot("lorem");
      expect(snapshot).toEqual("Lorem");
    });

    it("should be possible to access 2nd level snapshot", () => {
      const snapshot = store.snapshot("ipsum", "sit");
      expect(snapshot).toEqual({ amet: "Amet" });
    });

    it("should be possible to access 3rd level snapshot", () => {
      const snapshot = store.snapshot("ipsum", "sit", "amet");
      expect(snapshot).toEqual("Amet");
    });
  });
});
