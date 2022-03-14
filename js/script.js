const monstersListSelection = document.querySelectorAll('.monster')

const monstersCards = document.querySelectorAll('.monster-card')

monstersListSelection.forEach(monster => {
  monster.addEventListener('click', () => {
    const openedMonsterCard = document.querySelector('.open')

    openedMonsterCard.classList.remove('open')

    const selectedMonsterID = monster.attributes.id.value

    const monsterCardToOpenID = 'card-' + selectedMonsterID
    const monsterCardToOpen = document.getElementById(monsterCardToOpenID)

    monsterCardToOpen.classList.add('open')

    const activeMonsterOnList = document.querySelector('.active')
    activeMonsterOnList.classList.remove('active')

    const selectedMonsterOnList = document.getElementById(selectedMonsterID)
    selectedMonsterOnList.classList.add('active')
  })
})
