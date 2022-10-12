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

import { useEffect, useReducer, useState } from 'react';
 
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

/* useEffect'in Timer ile birlikte kullanımı
useEffect bağımlılık olmadan çalıştığında component her render
edildiğinde veya bağımlılıklara bağlı olarak bağımlılıklar
değiştiğinde çalışır.
Bu durum bazı sorunlara sebep olabilir. Örneğin uzak sunucuya
http isteği göndermemiz gereken bir durumda istek aşırı
tekrarlanacak dolayısıyla da işlemci ve sunucuda kasılma ve
hatalar ortaya çıkacaktır.
Bunun önüne geçmek için setTimeout yardımıyla Timer
oluşturulup isteğin belli bir zaman bekledikten sonra
gönderilmesi ve arada oluşan isteklerin de clearTimeout ile
bellekten silinmesi sağlanmalıdır. 
Böylelikle yumuşak bir geçiş ve kullanıcı deneyimi sağlanır.
*/

/* useReducer Kullanımı
Bazı durumlarda özellikle birbiri ile ilişkili verileriniz
varsa useState kullanımı state yönetimi için yetersiz kalabilir.
Veya birbiri ile ilişkili statelerin güncellenme zamanları
farklılık gösterdiği için bazıları önce bazıları sonra
güncelleneceği için state yönetiminde tutarsızlıklar ortaya
çıkabilir.
Her ne kadar küçük uygulamalarda bu önemli bir sorun teşkil
etmiyor gibi gözükse de uygulama komplek hale geldikçe yeni
sorunlar ve spagetti kod ortaya çıkacaktır.
useReducer state leri daha profesyonel kullanmak için
tasarlanmıştır. Bu sayede ilişkili statelerin kontrolünü daha
rahat sağlayabiliriz. */

/* useReducer'ı Anlamak */
const [state,dispatcFn] = useReducer(reducerFn,inialState,initFn);

/*
state       -> Güncel state görüntüsü
dispatchFn  -> State'i güncelleyen fonksiyon
reducerFn   -> Güncel state'i alıp yeni state döndürür
initialState-> State'e başlangıç değeri vermek için kullanılır
initFn      -> Başlangıç değerini fonksiyon ile vermek için
*/

/* useContext Kullanımı */
/*
Componentler arası veriyi props ile geçirmek ve sürekli
forward etmek büyük uygulamalarda sorunlara sebep olabilir.
Prop chain dediğimiz prop zincirleri oluşabilir.
Context bu sorunun önüne geçmek için kullanılır.
Component dosyalarınızı PascalCase şeklinde yazdığımız için
Context dosyalarını kebap-case şeklinde yazıyoruz.

*/
