/* eslint-disable no-console */
/* eslint-disable no-undef */
window.client = (function () {
  function getTimers(success) {
    return fetch('/api/timers', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(success);
  }

  function createTimer(data) {
    return fetch('/api/timers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function updateTimer(data) {
    return fetch('/api/timers', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function deleteTimer(data) {
    return fetch('/api/timers', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function startTimer(data) {
    return fetch('/api/timers/start', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function stopTimer(data) {
    return fetch('/api/timers/stop', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

   function parseJSON(response) {
      return response.json();
   }

  return {
    getTimers,
    createTimer,
    updateTimer,
    startTimer,
    stopTimer,
    deleteTimer,
  };
}());
