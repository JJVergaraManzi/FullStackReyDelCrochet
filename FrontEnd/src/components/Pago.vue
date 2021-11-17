<template>
  <section class="showcase">
    <div class="crochet-container with-title">
      <h3>Compra del rey del crochet</h3>
      <div class="img">
        <img
          src=""
          alt=""
          srcset=""
        />
      </div>
    </div>
  </section>
  <div class="crochet-container with-title is-centered">
    <form @submit.prevent="handleSubmit">
      <fieldset :class="{ dis: loading }" class="fields">
        <div class="crochet-field"></div>
        <div class="crochet-field">
          <label for="name_field">Name</label>
          <input
            placeholder="Jane Doe"
            type="text"
            name="name"
            id="name_field"
            class="crochet-input"
          />
        </div>
        <div class="crochet-field">
          <label for="email_field">Email</label>
          <input
            placeholder="jane.doe@example.com "
            type="email"
            name="email"
            id="email_field"
            class="crochet-input"
          />
        </div>
        <div class="crochet-field">
          <label for="address_field">Address</label>
          <input
            placeholder="1234 Sycamore Street"
            type="text"
            name="address"
            id="address_field"
            class="crochet-input"
          />
        </div>
        <div class="crochet-field">
          <label for="direccion_field">direccion</label>
          <input
            placeholder="Ingrese su direción"
            type="text"
            name="direccion"
            id="direccion_field"
            class="crochet-input"
          />
        </div>
        <div class="crochet-field">
          <label for="addressnumber">Numero de dirección</label>
          <input
            placeholder="Su numero de dirección"
            type="text"
            name="zip"
            id="addressnumber"
            class="crochet-input"
          />
        </div>
        <div class="crochet-field">
          <label for="email_field">Tarjeta</label>
          <div id="stripe-element-mount-point" class="crochet-input" />
        </div>
      </fieldset>
      <div class="crochet-field">
        <button
          type="submit"
          class="crochet-btn is-primary"
          :class="{ dis: loading }"
        >
          {{ loading ? "Cargando..." : "Realice su compra" }}
        </button>
      </div>
    </form>
  </div>
  <h2>Or...</h2>
  <div class="nes-field mt">
    <button type="button" class="nes-btn is-success" @click="redirect">
      Comprar
    </button>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
const style = {
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "800",
      fontFamily: "Press Start 2P",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "green"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red"
    }
  }
};
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    let stripe = null;
    let loading = ref(true);
    let elements = null;
    onMounted(async () => {
      const ELEMENT_TYPE = "card";
      stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
      elements = stripe.elements();
      const element = elements.create(ELEMENT_TYPE, style);
      element.mount("#stripe-element-mount-point");
      loading.value = false;
    });
    async function handleSubmit(event) {
      if (loading.value) return;
      loading.value = true;
      const { name, email, direccion, addressnumber } = Object.fromEntries(
        new FormData(event.target)
      );
      console.log("here", name, email, direccion, addressnumber);
      const billingDetails = {
        name,
        email,
        direccion,
        addressnumber
      };
      const cardElement = elements.getElement("card");
      try {
        const response = await fetch("http://localhost:3001/stripe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ amount: 1999 })
        });
        const { secret } = await response.json();
        console.log("secret", secret);
        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails
        });
        console.log("error?", paymentMethodReq);
        const { error } = await stripe.confirmCardPayment(secret, {
          payment_method: paymentMethodReq.paymentMethod.id
        });
        loading.value = false;
        console.log("error?", error);
        router.push("/success");
      } catch (error) {
        console.log("error", error);
        loading.value = false;
      }
    }
    function redirect() {
      stripe.redirectToCheckout({
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000",
        lineItems: [
          {
            price: "price_0J1wDR0ADhx7uM8yPL8Wmpoq",
            quantity: 1
          }
        ],
        mode: "payment"
      });
    }
    return { redirect, loading, handleSubmit };
  }
};
</script>
<style scoped>
.checkout {
  border: 1px solid black;
  padding: 3px;
}
.fields {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
}
.img {
  display: flex;
  justify-content: center;
}
.showcase {
  margin-bottom: 20px;
}
.mt {
  margin-top: 20px;
}
.dis {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}
button {
  margin-top: 30px;
}
</style>