# Drag and drop приложение для конструирования калькулятора

![](https://shields.io/badge/-HTML-orange)
![](https://shields.io/badge/-CSS-blue)
![](https://shields.io/badge/-JavaScript-yellow)
![](https://shields.io/badge/-React.JS-05D9FF)

## Описание
 - В данном приложение изначально есть два экрана. Слева набор элементов для сборки калькулятора. Справа холст для размещения этих элементов. Так же присутствует кнопка для переключения режима работы приложения - *Runtime / Constructor*. В режиме *Constructor* элементы можно перемещать. В режиме *Runtime* элементы размещенные справа выполняют функции калькулятора, то есть кнопки нажимаются, дисплей показывает введенные данные.

## Функциональность калькулятора (Runtime)
 - Калькулятор производит вычисление между последними двумя введенными числами и последней операцией. (*Пример 1, 2, 3*)
 - Кнопка равно (*=*) производит расчет и сбрасывает память введенных данных. То есть нажатие на любую следующую кнопку калькулятора очищает дисплей.
 - Если делить на ноль, на дисплее будет написано *Не определено*.
 - Если числа не умещаются на экране, (не более 10 символов) на дисплее будет написано *o v e r*. В этот момент число еще хранится в памяти. Если после этого нажать кнопку любого числа, то предыдущее сбросится. Если нажать кнопку операции и новое число, затем равно, то будет произведено вычисление.
 - Если в памяти нет двух чисел, то при нажатие на равно ничего не произойдет, кроме сброса памяти.
 - Если результат вычисления меньше чем 10⁻⁷ то будет произведено преобразование в экспоненциальный вид. (*Пример 5*)
 - Так же поддерживается функция ввода дробно числа без нажатия *0*. (*Пример 4*)
 - - *Пример 1*: если ввести: *2 + / х -2* результат будет *0* (вычисление: *2 - 2*).
 - - *Пример 2*: если ввести: *3 + / х 2* результат будет *6* (вычисление: *2 х 3*).
 - - *Пример 3*: если ввести: *2 + - 3 / х 4* результат будет *12* (вычисление *3 х 4*).
 - - *Пример 4*: если ввести: *,2 х ,2* результат будет *0,04* (вычисление *0,2 х 0,2*)
 - - *Пример 5*: если ввести *0,0000001 -0,0000008* результат будет *-7е-7* (то есть *-7 х 10⁻⁷*)

 ## Функциональность drag and drop (Constructor)
  - Слева направо элементы можно перенести если потянуть их мышью. Обратно, только если произвести двойное нажатие на элемент справа.
 - Дисплей всегда находится сверху.
 - При размещение элемента в правой части происходит отображения места, куда он приземлиться. Синяя линия под элементом показывает, что элемент, который вы держите, окажется под этим элементом.
 - Если перемещать дисплей, то место приземления не отображается, так как дисплей всегда сверху.
 - Элемент, которого перенесли, слева становится полупрозрачным.
 - Кнопка переключения режима работы приложения реализована с помощью *react-redux*. 

<tr>
    <hr>
</tr>

 [Ссылка на макет в Figma](https://www.figma.com/file/pdYzuOkvXY3Q00YRAMsLuz/Calculator-Constructor).

 [Ссылка на готовый проект](https://tyt34.github.io/calculator-constructor/).

 ## Запуск приложения
1. npm i
2. npm run start
