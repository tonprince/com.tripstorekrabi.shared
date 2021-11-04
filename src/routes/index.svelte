<script context="module">
  export const prerender = false;
  export const ssr = false;
</script>

<script>
  import { firestore } from "$lib/Firebase.js";
  import { doc, getDoc } from "firebase/firestore";

  let number = 0;
  let productRef = doc(firestore, "meta", "BOOKING_NUMBER");
  getDoc(productRef).then((snapshot) => {
    number = snapshot.get("last");
  });
</script>

<div>Hello {number}</div>
