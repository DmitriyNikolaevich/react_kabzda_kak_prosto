let store = {
  _state: {
    posts: [
      { id: 1, src: 'https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI', text: 'Post 3', likes: 3 },
      { id: 2, src: 'https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI', text: 'Post 7', likes: 9 },
      { id: 3, src: 'https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI', text: 'Post 11', likes: 5 }
    ],
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Jora" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" }
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How do you do?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" }
    ],
    newPostText: "IT-Kamasutra",
    newMessageText: "Mes"
  },

  _rerender() {
  },

  //неизменяющие state функции

  getState() {
    return this._state;
  },

  stateCallback(observer) {
    this._rerender = observer;
  },

  //изменяющие state функции

  dispatch(action) {
    if (action.type === 'WRITE-WORDS') {
      this._state.newPostText = action.newLetter;
      this._rerender(this);
    } else if (action.type === 'WRITE-MESSAGE') {
      this._state.newMessageText = action.newLetter;
      this._rerender(this);
    } else if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        src: 'https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI',
        text: this._state.newPostText,
        likes: 0
      }
      this._state.posts.push(newPost);
      this._state.newPostText = '';
      this._rerender(this);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 6,
        message: this._state.newMessageText,
      };
      this._state.messages.push(newMessage);
      this._state.newMessageText = "";
      this._rerender(this);
    }
  }
};


export default store;