<template>
  <div class="relative flex items-top justify-center min-h-screen bg-blue-200 sm:items-center sm:pt-0">
    <!-- default dialog  -->
    <el-dialog
      id="defaultDialog"
      title="This is a title"
      :visible.sync="defaultDialog"
      :destroy-on-close="true"
      center>
      <span>Here's some content of this dialog.</span>
      <span slot="footer" class="dialog-footer">
        <el-button data-test="closeBtn" type="primary" @click="defaultDialog = false">OK</el-button>
      </span>
    </el-dialog>

    <div class="w-2/3 mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-8 sm:pt-0">
        <p data-test="title" class="font-mono text-4xl">This is Home page</p>
      </div>
      <div class="w-full text-center mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <NuxtLink to="/list">
          <el-button data-test="goToListBtn" class="w-2/3" type="primary">Go to List page</el-button>
        </NuxtLink>
        <div class="mt-8">
          <el-button data-test="openDialogBtn" class="w-2/3" type="primary" @click="defaultDialog = true">Open dialog</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultDialog: true  // set it to true to open it after mounted
    }
  }
}
</script>

