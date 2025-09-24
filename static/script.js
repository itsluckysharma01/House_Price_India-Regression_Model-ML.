document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("predictionForm");
  const predictBtn = document.querySelector(".predict-btn");

  // Form validation and submission
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!validateForm()) {
        e.preventDefault();
        return false;
      }

      // Show loading state
      predictBtn.innerHTML = "<span>🔄 Predicting...</span>";
      predictBtn.disabled = true;
    });
  }

  // Real-time validation and calculations
  setupFormInteractions();

  function validateForm() {
    const requiredFields = form.querySelectorAll(
      "input[required], select[required]"
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value || field.value === "") {
        showFieldError(field, "This field is required");
        isValid = false;
      } else {
        clearFieldError(field);
      }
    });

    // Custom validations
    const bedrooms = parseInt(document.getElementById("bedrooms").value);
    const bathrooms = parseFloat(document.getElementById("bathrooms").value);
    const totalRooms = parseFloat(document.getElementById("total_rooms").value);

    if (totalRooms < bedrooms + bathrooms) {
      showFieldError(
        document.getElementById("total_rooms"),
        "Total rooms should be at least the sum of bedrooms and bathrooms"
      );
      isValid = false;
    }

    return isValid;
  }

  function showFieldError(field, message) {
    clearFieldError(field);

    const errorDiv = document.createElement("div");
    errorDiv.className = "field-error";
    errorDiv.textContent = message;
    errorDiv.style.color = "#e74c3c";
    errorDiv.style.fontSize = "0.85rem";
    errorDiv.style.marginTop = "5px";

    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = "#e74c3c";
  }

  function clearFieldError(field) {
    const existingError = field.parentNode.querySelector(".field-error");
    if (existingError) {
      existingError.remove();
    }
    field.style.borderColor = "#e1e5e9";
  }

  function setupFormInteractions() {
    // Auto-calculate total rooms suggestion
    const bedroomsInput = document.getElementById("bedrooms");
    const bathroomsInput = document.getElementById("bathrooms");
    const totalRoomsInput = document.getElementById("total_rooms");

    function updateTotalRoomsSuggestion() {
      const bedrooms = parseInt(bedroomsInput.value) || 0;
      const bathrooms = parseFloat(bathroomsInput.value) || 0;

      if (bedrooms > 0 && bathrooms > 0) {
        const suggestedTotal = bedrooms + bathrooms + 2; // Add living room, kitchen
        if (
          !totalRoomsInput.value ||
          totalRoomsInput.value < bedrooms + bathrooms
        ) {
          totalRoomsInput.value = suggestedTotal;
        }
      }
    }

    if (bedroomsInput && bathroomsInput && totalRoomsInput) {
      bedroomsInput.addEventListener("change", updateTotalRoomsSuggestion);
      bathroomsInput.addEventListener("change", updateTotalRoomsSuggestion);
    }

    // Format number inputs with commas
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach((input) => {
      if (input.id.includes("area") || input.id.includes("distance")) {
        input.addEventListener("blur", function () {
          if (this.value) {
            // Add thousand separators in placeholder or title
            const formatted = parseInt(this.value).toLocaleString();
            this.title = `Formatted: ${formatted}`;
          }
        });
      }
    });

    // Grade helper
    const gradeInput = document.getElementById("grade");
    if (gradeInput) {
      const gradeHelper = document.createElement("small");
      gradeHelper.style.display = "block";
      gradeHelper.style.marginTop = "5px";
      gradeHelper.style.color = "#666";
      gradeHelper.innerHTML =
        "1-6: Below Average | 7: Average | 8-10: Good | 11-13: Luxury";
      gradeInput.parentNode.appendChild(gradeHelper);
    }

    // Condition helper
    const conditionSelect = document.getElementById("condition");
    if (conditionSelect) {
      const conditionHelper = document.createElement("small");
      conditionHelper.style.display = "block";
      conditionHelper.style.marginTop = "5px";
      conditionHelper.style.color = "#666";
      conditionHelper.innerHTML =
        "1: Poor | 2: Fair | 3: Average | 4: Good | 5: Excellent";
      conditionSelect.parentNode.appendChild(conditionHelper);
    }
  }

  // Add smooth scrolling for better UX
  function smoothScrollTo(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  // Price formatting for result page
  if (
    window.location.pathname.includes("predict") ||
    document.querySelector(".price-display")
  ) {
    // Add animation to price display
    const priceDisplay = document.querySelector(".price-display");
    if (priceDisplay) {
      priceDisplay.style.opacity = "0";
      priceDisplay.style.transform = "scale(0.8)";

      setTimeout(() => {
        priceDisplay.style.transition = "all 0.5s ease";
        priceDisplay.style.opacity = "1";
        priceDisplay.style.transform = "scale(1)";
      }, 300);
    }
  }

  // Add tooltips for better user experience
  const tooltips = {
    views: "Number of times the house has been viewed (0-4)",
    grade: "Overall grade given to the housing unit (1-13 scale)",
    waterfront: "Whether the house has a waterfront view",
    condition: "Overall condition of the house (1-5 scale)",
  };

  Object.keys(tooltips).forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.title = tooltips[fieldId];
    }
  });
});
