<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
  data() {
    return {
      hobbyOptions: ["Thời Trang", "Đọc sách", "Đi dạo", "Thể thao"],
    };
  },
  methods: {
    async updateHobby(hobby, event) {
      const isChecked = event.target.checked;
      let updatedHobbies = [...(this.contact.hobbies || [])];

      if (isChecked) {
        updatedHobbies.push(hobby);
      } else {
        updatedHobbies = updatedHobbies.filter((h) => h !== hobby);
      }
      this.$emit("update:contact", {
        ...this.contact,
        hobbies: updatedHobbies,
      });
    },
  },
};
</script>
<template>
  <div>
    <div class="p-1">
      <strong>Tên:</strong>
      {{ contact.name }}
    </div>
    <div class="p-1">
      <strong>E-mail:</strong>
      {{ contact.email }}
    </div>
    <div class="p-1">
      <strong>Địa chỉ:</strong>
      {{ contact.address }}
    </div>
    <div class="p-1">
      <strong>Điện thoại:</strong>
      {{ contact.phone }}
    </div>
    <div class="p-1">
      <strong>Liên hệ yêu thích:&nbsp;</strong>
      <i v-if="contact.favorite" class="fas fa-check"></i>
      <i v-else class="fas fa-times"></i>
    </div>

    <div class="p-1">
      <strong>Sở thích:</strong>
      <div class="mt-2">
        <div
          v-for="option in hobbyOptions"
          :key="option"
          class="form-check form-check-inline mr-2"
        >
          <input
            type="checkbox"
            class="form-check-input"
            style="cursor: pointer"
            :id="'card-' + option"
            :value="option"
            :checked="contact.hobbies && contact.hobbies.includes(option)"
            @change="updateHobby(option, $event)"
          />
          <label class="form-check-label" :for="'card-' + option">{{
            option
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
