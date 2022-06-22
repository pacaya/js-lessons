describe("talkToBob", function () {
  it("replies 'Всё равно'", function () {
    // 1. Подготовка данных

    // 2. Выполнение тестируемого кода
    const result = talkToBob("say something.");

    // 3. Проверка результатов
    expect(result).to.equal("Всё равно");
  });

  it("replies 'Всё равно' для цифр", function () {
    const result = talkToBob("123");

    expect(result).to.equal("Всё равно");
  });

  it("replies 'Хорошо. Пусть так и будет!' when addressed with nothing", function() {
    const result = talkToBob("  ");

    expect(result).to.equal("Хорошо. Пусть так и будет!");
  });

  it("replies 'Конечно' when addressed with a question", function() {
    const result = talkToBob(" Как дела? ");

    expect(result).to.equal("Конечно");
  });

  it("replies 'Вау, расслабься!' when addressed with a shout", function() {
    const result = talkToBob(" ИДИ СЮДА 123 ");

    expect(result).to.equal("Вау, расслабься!");
  });

  it("replies 'Успокойся, я знаю, что делаю!' when asked shouting question", function() {
    const result = talkToBob(" ИДИ СЮДА? ");

    expect(result).to.equal("Успокойся, я знаю, что делаю!");
  });

});