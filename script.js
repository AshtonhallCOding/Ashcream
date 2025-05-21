function show(page) {
  ['home','flavors','locations','about','contact','not-found'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(page).classList.remove('hidden');
}
