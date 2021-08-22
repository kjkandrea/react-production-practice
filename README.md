# 요모조모

## `<></>` Empty angle bracket ?

```jsx
function Awesome() {
 return (
  <>
    <Javascript />
    <React />
  </>
)
}
 ```

요건 [Fragments](https://ko.reactjs.org/docs/fragments.html) 란 건데..

복수개 엘리먼트 반환할때` <template />` 으로 묶어주는거랑 비슷한 개념인듯. 안묶어주면 react error

syntax sugar 제거하면 `<React.Fragment></React.Fragment>` 로 쓴다함.
