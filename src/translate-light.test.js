const translate = require('./translate-light');

const transClass = new translate()

test("Ensure throw on not setting text", () => {
    expect(() => {
        transClass.setText();
    }).toThrow();
});


test("Ensure throw on not setting text as object", () => {
    expect(() => {
        transClass.setText(String);
    }).toThrow();
})

test("Ensure throw on not entering translation into object", () => {
    expect(() => {
        transClass.setText({});
    }).toThrow();
})


test("Ensure ability to set text object", () => {
    expect(transClass.setText({"Hello" : {"en" :"Hello"}})).toBeUndefined();
})


test("Ensure throw on not setting lang", () => {
    expect(() => {
        transClass.setLang();
    }).toThrow();
});

test("Ensure throw on not setting lang as string", () => {
    expect(() => {
        transClass.setLang(Object);
    }).toThrow();
})

test("Ensure ability to set lang string", () => {
    expect(transClass.setLang("en")).toBeUndefined();
})

test("Ensure throw on trying to get an unset translation key", () => {
    expect(() => {
        transClass.setLang("en");
        transClass.setText({"Hello" : {"en" :"Hello"}})
        transClass.get("Unset");
    }).toThrow();
})

test("Ensure throw on trying to get an unset translation lang on a key", () => {
    expect(() => {
        transClass.setLang("ru");
        transClass.setText({"Hello" : {"en" :"Hello"}})
        transClass.get("Hello");
    }).toThrow();
})

test("Ensure return of translation on get of correct key and translation", () => {
    expect(() => {
        transClass.setLang("ru");
        transClass.setText({"Hello" : {"en" :"Hello", "ru": "Привет"}})
        transClass.get("Hello").toBe("Привет");
    })
})