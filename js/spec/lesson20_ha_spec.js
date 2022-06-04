describe("FizzBuzz", function() {
  it("returns Fizz if n divides by 3 and not divides by 5", function() {
    // 1. Подготовка данных

    // 2. Выполнение тестируемого кода
    const result = getFizzBuzz(9);

    // 3. Проверка результатов
    expect(result).to.equal("Fizz");
  });

  it("returns Buzz if n divides by 5 and not divides by 3", function() {
    const result = getFizzBuzz(10);

    expect(result).to.equal("Buzz");
  });

  it("returns FizzBuzz if n divides by both 3 and 5", function() {
    const result = getFizzBuzz(15);

    expect(result).to.equal("FizzBuzz");
  })

  it("returns 'n' if n does not divide by either 3 or 5", function() {
    const result = getFizzBuzz(16);

    expect(result).to.equal("16");
  })
});