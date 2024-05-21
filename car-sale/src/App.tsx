import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  HOME,
  NOT_FOUND,
  BLOGS,
  CATEGORIES,
  PRODUCT,
  SINGLE_BLOG,
} from './constants/pathName';
import { isNumber } from 'lodash';
import MainLayout from './components/MainLayout';
import Home from './components/Home/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Categories from './pages/Categories/Categories';
import NotFound from './pages/NotFound/NotFound';
import { Product } from './pages/Product/Product';
import './App.css';

const App = () => {
  // function foo(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   // console.log(this);
  // }
  // const bar = new foo('John', 20);

  // console.log(bar);

  // const foo1 = () => {
  //   console.log(this);
  // };
  // foo1();

  // const foo = {
  //   name: 'John',
  //   age: 20,

  //   sayName: function () {
  //     console.log(`Hello from obj ${this.name}`);
  //   },
  // };

  // obj.sayHello();
  // console.log(this);

  // const bar = {
  //   name: 'Monika',
  //   age: 22,

  //   sayAge: function (num) {
  //     console.log(`Hello from obj2 ${this.age}, ${num}`);
  //   },
  // };

  // bar.sayAge.apply(foo, [5]);

  // function recursion(num) {
  //   if (num === 0) return;
  //   console.log(num);

  //   return recursion(num - 1);
  // }

  // recursion(3)

  // const test = [1, [2, 3], 4, [5, 6, [7, 8, [ 9, 10 ]]]]

  // function customFlat(arr) {
  //   let result = [];

  //   function recursion(arrayOfValues) {
  //     if (isNumber(arrayOfValues)) {
  //       result.push(arrayOfValues);
  //       return;
  //     }

  //     arrayOfValues.forEach((elem) => {
  //       if (isNumber(elem)) {
  //         result.push(elem);
  //       } else {
  //         recursion(elem);
  //       }
  //     });
  //   }
  //   recursion(arr);
  //   return result;
  // }

  // console.log(customFlat(test));

  //['foo', 'bar', 'buz', 'boom', 'foo', 'buz', 'boom' 'foo', 'foo']
  //   {
  //     foo: 3,
  //     bar: 2,
  //     baz: 5
  // }
  // const test = ['foo', 'bar', 'buz', 'boom', 'foo', 'buz', 'boom', 'foo', 'foo']
  //   function countWords(arr) {
  //     const result = {};
  //     if (arr.length === 0) return result;

  //     arr.forEach((elem) => {
  //       if (result[elem] !== elem) result[elem] = 0;
  //       else {
  //         result[elem] += 1;
  //       }
  //     });
  //     // function recursion(array) {

  //     // }
  //     // recursion(arr);
  //     return result;
  //   }
  //   console.log(countWords(test));

  const foo = (a, b) => a.split('').reverse().join('') === b;
  

  console.log(foo('panda', 'adnap'));

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BLOGS} element={<Blogs />} />
          <Route path={SINGLE_BLOG} element={<SingleBlog />} />
          <Route path={CATEGORIES} element={<Categories />}></Route>
          <Route path={PRODUCT} element={<Product />} />

          <Route path={NOT_FOUND} element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
