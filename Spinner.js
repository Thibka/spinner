// Spinner v. 1.03
(function(window, document, undefined){
    var getTime = Date.now || function() {return new Date().getTime();};

    function Spinner(params) {
        this.element  = document.getElementById(params.id);
        this.start = params.start;
        this.end = params.end;
        this.diff = (this.end > this.start) ? this.end - this.start : -(this.start-this.end);
        this.duration = params.duration;
        this.easing = params.easing;
        this.clock = 0,
        this.easing =  params.easing || function (currentIteration, startValue, changeInValue, totalIterations) {
            if ((currentIteration /= totalIterations / 2) < 1) {
                return changeInValue / 2 * currentIteration * currentIteration + startValue;
            }
            return -changeInValue / 2 * ((--currentIteration) * (currentIteration - 2) - 1) + startValue;
        };
        
        switch(params.axis) {
            case "x": this.axis = "1,0,0"; break;
            case "y": this.axis = "0,1,0"; break;
            default : this.axis = "0,0,1";
        }
    }

    Spinner.prototype.spin = function() {
        this.startTime = getTime();
        this._spinAnimation();
    }

    Spinner.prototype._spinAnimation = function() {             
        this.clock = getTime() - this.startTime;
        
        currentRotation = this.easing(this.clock, this.start, this.diff, this.duration);
        this.element.style.webkitTransform = this.element.style.transform = "rotate3d(" + this.axis + "," + currentRotation + "deg)";
        
        console.log("rotate3d(" + this.axis + "," + currentRotation + "deg)");
        if (this.clock < this.duration) requestAnimationFrame(this._spinAnimation.bind(this));
        else {
            this.element.style["-webkit-transform"] = "rotate3d(" + this.axis + "," + this.end + "deg)";
            this.element.style.transform = "rotate3d(" + this.axis + "," + this.end + "deg)";
        }
    }

    window.Spinner = Spinner;

})(window, document);