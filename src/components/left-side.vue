<template>
  <div class="left_content">
    <div>
      <h1>VK for mobile devices</h1>
      <p>
        Install our official mobile app and stay in touch with your friends
        anytime and anywhere.
      </p>
    </div>

    <div>
      <img
        src="https://sun9-52.userapi.com/09IqLEQ1F6S-NcynGI29HpxaA4eUPECZr9tybg/pYORDwKmdDI.png"
        alt=""
      />
    </div>
    <div>
      <button>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 2.47a.5.5 0 0 1 .87.5l-1.34 2.3A8 8 0 0 1 16 12.05H0a8 8 0 0 1 3.62-6.7L2.25 2.97a.5.5 0 0 1 .87-.5l1.37 2.38a7.97 7.97 0 0 1 6.92-.05l1.34-2.33ZM13 9.04a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            fill="currentColor"
          ></path>
        </svg>
        <div>Google play</div>
      </button>
      <button>RuStore</button>
      <button>App Store</button>
    </div>
    <div><a href="">All products</a></div>
  </div>
</template>

<style lnag="scss">
p,
h1 {
  text-align: center;
}

button {
  height: 2rem;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
}

svg {
  display: inline-block;
  transform: transalate(0, 5opx);
}

button:hover {
  background: gray;
  cursor: pointer;
}

.left_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
