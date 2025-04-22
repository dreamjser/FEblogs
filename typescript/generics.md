# TypeScript 泛型详解

## 什么是泛型？

泛型（Generics）是 TypeScript 中一个强大的特性，它允许我们创建可重用的组件，这些组件可以支持多种类型。泛型的主要目的是在保持类型安全的同时，提供代码的复用性。

## 基本语法

```typescript
function identity<T>(arg: T): T {
    return arg;
}

// 使用方式
let output = identity<string>("myString");  // 显式指定类型
let output2 = identity("myString");         // 类型推断
```

## 泛型约束

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 使用
loggingIdentity({length: 10, value: 3});  // 正确
loggingIdentity(3);                       // 错误，数字没有length属性
```

## 泛型类

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

## 内置工具类型

### Partial<T>

将类型 T 的所有属性变为可选。

```typescript
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash"
});
```

### Required<T>

将类型 T 的所有属性变为必选。

```typescript
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };  // 正确
const obj2: Required<Props> = { a: 5 };  // 错误，缺少属性 b
```

### Readonly<T>

将类型 T 的所有属性变为只读。

```typescript
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Delete inactive users"
};

todo.title = "Hello";  // 错误，不能修改只读属性
```

### Record<K,T>

构造一个类型，其属性名的类型为 K，属性值的类型为 T。

```typescript
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
};
```

### Pick<T,K>

从类型 T 中选取部分属性 K 来构造类型。

```typescript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
};
```

### Omit<T,K>

从类型 T 中排除部分属性 K 来构造类型。

```typescript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
};
```

### Exclude<T,U>

从类型 T 中排除可以赋值给 U 的类型。

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<string | number | (() => void), Function>;  // string | number
```

### Extract<T,U>

从类型 T 中提取可以赋值给 U 的类型。

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T1 = Extract<string | number | (() => void), Function>;  // () => void
```

### NonNullable<T>

从类型 T 中排除 null 和 undefined。

```typescript
type T0 = NonNullable<string | number | undefined>;  // string | number
type T1 = NonNullable<string[] | null | undefined>;  // string[]
```

### ReturnType<T>

获取函数类型 T 的返回类型。

```typescript
type T0 = ReturnType<() => string>;  // string
type T1 = ReturnType<(s: string) => void>;  // void
type T2 = ReturnType<<T>() => T>;  // unknown
```

### Parameters<T>

获取函数类型 T 的参数类型。

```typescript
type T0 = Parameters<() => string>;  // []
type T1 = Parameters<(s: string) => void>;  // [s: string]
type T2 = Parameters<<T>(arg: T) => T>;  // [arg: unknown]
```

## 泛型的最佳实践

1. 使用泛型来创建可重用的组件
2. 使用泛型约束来限制类型参数
3. 优先使用类型推断，而不是显式指定类型
4. 使用内置工具类型来简化类型定义
5. 在适当的时候使用泛型默认值

## 总结

TypeScript 的泛型是一个非常强大的特性，它可以帮助我们：
- 提高代码的复用性
- 保持类型安全
- 减少重复代码
- 提供更好的开发体验

通过合理使用泛型和内置工具类型，我们可以写出更加健壮和可维护的 TypeScript 代码。
