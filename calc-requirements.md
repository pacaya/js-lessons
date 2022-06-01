Requirements

- Create a simple String calculator with a method `add(numbers: string): number`
- The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
- Allow the Add method to handle an unknown amount of numbers
- Allow the Add method to handle new lines between numbers (instead of commas).
	- The following input is ok: “1\n2,3” (will equal 6)
- Allow negative numbers in different positions
- Support different delimiters
	- To change a delimiter, the beginning of the string will contain a separate line that looks like this: “/[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
