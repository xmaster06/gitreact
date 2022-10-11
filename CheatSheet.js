/* useEffect'e Bağımlılık Olarak
Ne eklenebilir?
Ne eklenemez?
*/

/* EKLENMEMELİ !

1) State i güncelleyen fonksiyonları eklememeliyiz.
Çünkü React onların değişmeyeceğini garanti eder.

2) Javascriptin fetch(), localStorage() gibi fonksiyonları
Çünkü onlar Javascripte ait fonksiyonlardır.

3) Component'in dışında oluşturulan fonksiyon veya değişkenler
Çünkü dışarda tanımlananların değişimi componenti etkilemez.

KISACASI
Her şeyi ekleyebiliriz fakat eklediklerimiz
Componentimiz veya üst componentler tarafından
değiştirilebilecek "şeyler" olmalıdır!
*/

import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};

/* BURADA !!!

1) timerIsActive eklendi
Çünkü o bir componet state'i

2) timerDuration eklendi
Çünkü o parentten gelebilecek bir prop

3) setTimerIsActive eklenmedi
Çünkü o state'i değiştiren bir fonksiyon

4) myTimer eklenmedi
Çünkü o componentin dışında bir değişken

5) setTimeout eklenmedi
Çünkü o componentten bağımsız bir Javascript fonksiyonu
*/
