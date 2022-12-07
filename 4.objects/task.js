function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Vera", "female", 20);
const student2 = new Student("Oleg", "male", 23);
const student3 = new Student("Gleb", "male", 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark]
  } else {
    this.marks.push(...mark)
  }
}

Student.prototype.getAverage = function () {
  const initialValue = 0;
  let sumWithInitial = this.marks.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.mark;
  this.excluded = reason;
}