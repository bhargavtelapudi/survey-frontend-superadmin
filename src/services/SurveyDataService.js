import http from "../http-common";

class SurveyDataService {
  getAllSurveys() {
    return http.get("/survey/list", {
      headers: {
        'x-access-token': sessionStorage.getItem("authToken")
      }
    });
  }
  getSurvey(id) {
    return http.get(`/survey/${id}`, {
      headers: {
        'x-access-token': sessionStorage.getItem("authToken")
      }
    });
  }
  createSurvey(surveyData) {
    return http.post("/create/survey", surveyData, {
      headers: {
        'x-access-token': sessionStorage.getItem("authToken")
      }
    });
  }
  deleteSurvey(id) {
    return http.delete(`/survey/${id}`, {
      headers: {
        'x-access-token': sessionStorage.getItem("authToken")
      }
    });
  }
  publishSurvey(surveyData) {
    return http.put(`/survey/${surveyData.id}?isPublish=${surveyData.isPublished}`, {
      headers: {
        'x-access-token': sessionStorage.getItem("authToken")
      }
    });
  }
}
export default new SurveyDataService();