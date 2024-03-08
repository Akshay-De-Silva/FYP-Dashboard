export const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Select Model</h3>
      <h4>Classification</h4>
      <ul>
        <li>Logistic Regression</li>
        <li>K-Nearest Neighbors</li>
        <li>Decision Tree</li>
        <li>Random Forest</li>
        <li>Naive Bayes</li>
        <li>Support Vector Machine</li>
        <li>Neural Network</li>
      </ul>
      <h4>Regression</h4>
      <ul>
        <li>Linear Regression</li>
        <li>Ridge Regression</li>
        <li>Lasso Regression</li>
        <li>Bayesian Ridge Regression</li>
      </ul>
    </div>
  );
};
