CATEGORIES = {
    "A": [
        {
            "id": "algebra-linear",
            "name": "Algebra — Linear Equations",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Explore linear equations and their graphs. Understand slope, y-intercept and how changing coefficients transforms the line.",
            "expression": "y=mx+b",
            "steps": [
                "Type y = 2x + 1 in Desmos to see a line with slope 2",
                "Add a slider for m and b to see how they affect the graph",
                "Plot two lines to find their intersection"
            ],
            "formulas": ["y = mx + b", "m = (y₂-y₁)/(x₂-x₁)"]
        },
        {
            "id": "angles-geometry",
            "name": "Angles & Lines",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Construct angles, explore supplementary and complementary relationships, and understand parallel lines cut by a transversal.",
            "ggb_app": "geometry",
            "steps": [
                "Use the Angle tool to measure angles",
                "Draw two parallel lines and a transversal",
                "Verify corresponding angles are equal"
            ],
            "formulas": ["∠A + ∠B = 180° (supplementary)", "∠A + ∠B = 90° (complementary)"]
        },
        {
            "id": "area-under-curves",
            "name": "Area Under Curves",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Visualize definite integrals as the area between a curve and the x-axis. Understand Riemann sums approximation.",
            "expression": "y=x^2",
            "steps": [
                "Plot y = x² and shade the area from 0 to 2",
                "Use ∫ notation: \\int_{0}^{2} x^2 dx",
                "Compare left and right Riemann sums"
            ],
            "formulas": ["∫ₐᵇ f(x)dx", "Area = lim Σ f(xᵢ)Δx"]
        },
        {
            "id": "arithmetic-sequences",
            "name": "Arithmetic Sequences",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Plot arithmetic sequences and explore how the common difference shapes their growth on a coordinate plane.",
            "expression": "a_n = a_1 + (n-1)d",
            "steps": [
                "Define a₁ = 2 and d = 3 as sliders",
                "Plot the sequence as discrete points",
                "Compare with a linear function"
            ],
            "formulas": ["aₙ = a₁ + (n-1)d", "Sₙ = n/2 (a₁ + aₙ)"]
        },
        {
            "id": "asymptotes",
            "name": "Asymptotes",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Explore vertical, horizontal, and oblique asymptotes in rational functions. See the function approach but never touch the line.",
            "expression": "y=1/x",
            "steps": [
                "Plot y = 1/x and observe x = 0 and y = 0 as asymptotes",
                "Try y = (x²-1)/(x-1) and find the hole",
                "Plot y = (2x+1)/(x-3) and find asymptotes"
            ],
            "formulas": ["Vertical: denominator = 0", "Horizontal: degree comparison"]
        }
    ],
    "B": [
        {
            "id": "binomial-theorem",
            "name": "Binomial Theorem",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Expand binomial expressions and visualize Pascal's triangle patterns with interactive sliders.",
            "expression": "(1+x)^n",
            "steps": [
                "Plot y = (1+x)^n with a slider for n",
                "Observe how the curve changes with n",
                "Compare with individual terms of the expansion"
            ],
            "formulas": ["(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ", "C(n,k) = n! / (k!(n-k)!)"]
        },
        {
            "id": "box-plots",
            "name": "Box Plots & Statistics",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Build box-and-whisker plots from data sets. Identify Q1, Q2, Q3, and outliers visually.",
            "expression": "boxplot",
            "steps": [
                "Enter a list of numbers in Desmos",
                "Use the stats functions to compute quartiles",
                "Draw a box plot using the built-in feature"
            ],
            "formulas": ["IQR = Q3 - Q1", "Outlier if > Q3 + 1.5·IQR"]
        },
        {
            "id": "bearings-angles",
            "name": "Bearings & Direction",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Use GeoGebra to construct compass bearings and solve real-world navigation problems.",
            "ggb_app": "geometry",
            "steps": [
                "Draw a North direction line from a point",
                "Measure angles clockwise from North",
                "Solve a 3-point navigation problem"
            ],
            "formulas": ["Bearing measured clockwise from North", "0° ≤ bearing < 360°"]
        }
    ],
    "C": [
        {
            "id": "calculus-derivatives",
            "name": "Calculus — Derivatives",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Visualize derivatives as tangent lines. See how the slope of f(x) creates f'(x) with a live scrubber.",
            "expression": "y=x^3-3x",
            "steps": [
                "Plot f(x) = x³ - 3x",
                "Add the derivative: f'(x) = 3x² - 3",
                "Use a point a and draw the tangent line"
            ],
            "formulas": ["f'(x) = lim[h→0] (f(x+h)-f(x))/h", "d/dx(xⁿ) = nxⁿ⁻¹"]
        },
        {
            "id": "circles",
            "name": "Circles & Equations",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Graph circles using standard and general form. Explore radius, center, and their relationship to the equation.",
            "expression": "x^2+y^2=r^2",
            "steps": [
                "Plot x² + y² = 25 (center origin, r=5)",
                "Try (x-3)² + (y+2)² = 16",
                "Add a slider for h, k, r"
            ],
            "formulas": ["(x-h)² + (y-k)² = r²", "x² + y² + Dx + Ey + F = 0"]
        },
        {
            "id": "conics",
            "name": "Conic Sections",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Explore ellipses, parabolas, hyperbolas, and circles — all as slices of a double cone.",
            "expression": "x^2/a^2+y^2/b^2=1",
            "steps": [
                "Start with the ellipse: x²/a² + y²/b² = 1",
                "Add sliders for a and b",
                "Switch to a hyperbola by changing + to -"
            ],
            "formulas": ["Ellipse: x²/a² + y²/b² = 1", "Hyperbola: x²/a² - y²/b² = 1"]
        },
        {
            "id": "coordinate-geometry",
            "name": "Coordinate Geometry",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Plot points, find distances, midpoints, and slopes. Build geometric intuition on the Cartesian plane.",
            "ggb_app": "graphing",
            "steps": [
                "Plot points A(1,2) and B(5,6)",
                "Measure the distance AB",
                "Find the midpoint M and verify it"
            ],
            "formulas": ["d = √((x₂-x₁)² + (y₂-y₁)²)", "M = ((x₁+x₂)/2, (y₁+y₂)/2)"]
        },
        {
            "id": "complex-numbers",
            "name": "Complex Numbers",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Plot complex numbers on the Argand diagram. Explore modulus, argument, and multiplication as rotation.",
            "expression": "r(cos(t)+i*sin(t))",
            "steps": [
                "Plot z = a + bi as a point (a, b)",
                "Draw |z| as distance from origin",
                "Multiply two complex numbers and visualize rotation"
            ],
            "formulas": ["|z| = √(a²+b²)", "arg(z) = arctan(b/a)", "z = r·e^(iθ)"]
        }
    ],
    "D": [
        {
            "id": "derivatives-chain-rule",
            "name": "Chain Rule",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Apply the chain rule and visualize composite function differentiation with live graphs.",
            "expression": "y=sin(x^2)",
            "steps": [
                "Plot y = sin(x²)",
                "Derive using chain rule: y' = 2x·cos(x²)",
                "Plot both on the same canvas and compare"
            ],
            "formulas": ["d/dx[f(g(x))] = f'(g(x))·g'(x)"]
        },
        {
            "id": "distance-formula",
            "name": "Distance & Midpoint Formula",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Interactively drag points and watch distance and midpoint update in real time.",
            "ggb_app": "geometry",
            "steps": [
                "Place two free points A and B",
                "Use the Distance tool to measure |AB|",
                "Construct the midpoint M"
            ],
            "formulas": ["d = √((Δx)² + (Δy)²)", "M = (x̄, ȳ)"]
        }
    ],
    "E": [
        {
            "id": "exponential-functions",
            "name": "Exponential Functions",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Explore growth and decay through exponential functions. Compare bases and see how e is special.",
            "expression": "y=a*b^x",
            "steps": [
                "Plot y = 2^x and y = (1/2)^x",
                "Add sliders for a (initial value) and b (base)",
                "Compare with y = eˣ"
            ],
            "formulas": ["y = a·bˣ", "y = ae^(kx)", "Half-life: t₁/₂ = ln(2)/k"]
        },
        {
            "id": "ellipses",
            "name": "Ellipses",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Plot ellipses, explore foci, eccentricity, and the relationship between semi-major and semi-minor axes.",
            "expression": "x^2/16+y^2/9=1",
            "steps": [
                "Plot x²/16 + y²/9 = 1",
                "Find the foci: c² = a² - b²",
                "Change a and b with sliders to reshape"
            ],
            "formulas": ["x²/a² + y²/b² = 1", "c² = a² - b²", "e = c/a"]
        }
    ],
    "F": [
        {
            "id": "functions-transformations",
            "name": "Function Transformations",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Translate, reflect, stretch, and compress any function by modifying the equation interactively.",
            "expression": "y=a*f(b(x-h))+k",
            "steps": [
                "Start with f(x) = x²",
                "Add sliders for a, b, h, k",
                "Explore what each parameter does visually"
            ],
            "formulas": ["y = a·f(b(x-h)) + k", "h = horizontal shift", "k = vertical shift"]
        },
        {
            "id": "fourier-series",
            "name": "Fourier Series",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Build complex periodic functions from sums of sines and cosines. Watch a square wave emerge term by term.",
            "expression": "sum of sin waves",
            "steps": [
                "Plot sin(x) as the first term",
                "Add sin(3x)/3, sin(5x)/5... terms",
                "Use a slider n for number of terms"
            ],
            "formulas": ["f(x) = a₀/2 + Σ[aₙcos(nx) + bₙsin(nx)]"]
        }
    ],
    "G": [
        {
            "id": "geometry-triangles",
            "name": "Triangle Geometry",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Construct triangles, explore congruence conditions, find circumcenters, incenters, and centroids.",
            "ggb_app": "geometry",
            "steps": [
                "Draw a triangle ABC",
                "Find all three medians and locate the centroid",
                "Construct the circumscribed circle"
            ],
            "formulas": ["Area = ½ base × height", "a/sin A = b/sin B = c/sin C"]
        },
        {
            "id": "gradient-slope",
            "name": "Gradient & Slope",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Understand slope as rise over run. Compare positive, negative, zero, and undefined slopes visually.",
            "expression": "y=2x+1",
            "steps": [
                "Plot lines with different slopes using sliders",
                "Draw right triangles to show rise/run",
                "Identify perpendicular slopes (m₁·m₂ = -1)"
            ],
            "formulas": ["m = rise/run = Δy/Δx", "Perpendicular: m₂ = -1/m₁"]
        }
    ],
    "H": [
        {
            "id": "hyperbola",
            "name": "Hyperbola",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Plot hyperbolas, explore asymptotes, foci, and the reflection property used in satellite dishes.",
            "expression": "x^2/a^2-y^2/b^2=1",
            "steps": [
                "Plot x²/9 - y²/4 = 1",
                "Draw asymptotes: y = ±(b/a)x",
                "Add sliders and explore the shape change"
            ],
            "formulas": ["x²/a² - y²/b² = 1", "Asymptotes: y = ±(b/a)x", "c² = a² + b²"]
        },
        {
            "id": "higher-derivatives",
            "name": "Higher Order Derivatives",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Graph f, f', f'' simultaneously to understand concavity, inflection points, and curve behavior.",
            "expression": "y=x^4-4x^2",
            "steps": [
                "Plot f(x) = x⁴ - 4x²",
                "Find f'(x) = 4x³ - 8x",
                "Find f''(x) = 12x² - 8 and locate inflection points"
            ],
            "formulas": ["f'' > 0 → concave up", "f'' < 0 → concave down", "f'' = 0 → inflection point"]
        }
    ],
    "I": [
        {
            "id": "integration-definite",
            "name": "Definite Integration",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Compute areas using definite integrals. Visualize the fundamental theorem with shaded regions.",
            "expression": "y=sin(x)",
            "steps": [
                "Plot y = sin(x) from 0 to π",
                "Shade the area: \\int_0^\\pi sin(x) dx",
                "Verify area = 2 analytically"
            ],
            "formulas": ["∫ₐᵇ f(x)dx = F(b) - F(a)", "F'(x) = f(x)"]
        },
        {
            "id": "inequalities",
            "name": "Inequalities & Regions",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Shade solution regions for linear and quadratic inequalities. Explore systems of inequalities graphically.",
            "expression": "y>x^2",
            "steps": [
                "Type y > x² in Desmos to see the region",
                "Add y < 4 to create an intersection",
                "Solve a linear programming problem visually"
            ],
            "formulas": ["Region above y > f(x)", "Region below y < f(x)"]
        },
        {
            "id": "inverse-functions",
            "name": "Inverse Functions",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Plot a function and its inverse. See the reflection across y = x and understand domain restrictions.",
            "expression": "y=x^2",
            "steps": [
                "Plot f(x) = x² (restricted domain x ≥ 0)",
                "Plot the inverse: x = y²",
                "Add y = x line to see the reflection"
            ],
            "formulas": ["f(f⁻¹(x)) = x", "Domain of f⁻¹ = Range of f"]
        }
    ],
    "J": [
        {
            "id": "joint-variation",
            "name": "Joint & Combined Variation",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Model real-world relationships where variables vary jointly or inversely with multiple quantities.",
            "expression": "z=k*x*y",
            "steps": [
                "Plot z = kxy as a 3D surface concept",
                "Use sliders for k, x and observe z change",
                "Apply to distance = speed × time"
            ],
            "formulas": ["y = kx (direct)", "y = k/x (inverse)", "z = kxy (joint)"]
        }
    ],
    "K": [
        {
            "id": "key-features-functions",
            "name": "Key Features of Functions",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Identify zeros, maxima, minima, intervals of increase/decrease, and end behavior on any graph.",
            "expression": "y=x^3-6x^2+9x",
            "steps": [
                "Plot f(x) = x³ - 6x² + 9x",
                "Find zeros using the root-finding tool",
                "Identify local max/min from f'(x) = 0"
            ],
            "formulas": ["Zero: f(x) = 0", "Max/Min: f'(x) = 0, f''(x) ≠ 0"]
        }
    ],
    "L": [
        {
            "id": "limits",
            "name": "Limits",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Explore limits graphically. Understand one-sided limits, limits at infinity, and discontinuities.",
            "expression": "y=sin(x)/x",
            "steps": [
                "Plot y = sin(x)/x near x = 0",
                "Zoom in to see the limit approaches 1",
                "Try y = 1/x² as x → 0"
            ],
            "formulas": ["lim[x→a] f(x) = L", "L'Hôpital: lim f/g = lim f'/g'"]
        },
        {
            "id": "logarithms",
            "name": "Logarithms",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Plot logarithmic functions and explore their inverse relationship with exponentials.",
            "expression": "y=log(x)",
            "steps": [
                "Plot y = log(x) and y = 10^x on same axes",
                "Observe they are reflections across y = x",
                "Try natural log: y = ln(x)"
            ],
            "formulas": ["logₐ(xy) = logₐx + logₐy", "logₐ(xⁿ) = n·logₐx", "ln(e) = 1"]
        },
        {
            "id": "locus",
            "name": "Locus of Points",
            "tool": "geogebra",
            "difficulty": "Intermediate",
            "description": "Trace the path of a moving point satisfying geometric conditions to derive equations of curves.",
            "ggb_app": "geometry",
            "steps": [
                "Fix two points F1 and F2",
                "Move point P so that |PF1| + |PF2| = constant",
                "Observe the ellipse traced out"
            ],
            "formulas": ["Ellipse: |PF1| + |PF2| = 2a", "Parabola: |PF| = distance to directrix"]
        }
    ],
    "M": [
        {
            "id": "matrices",
            "name": "Matrices & Transformations",
            "tool": "geogebra",
            "difficulty": "Advanced",
            "description": "Apply matrix multiplication as geometric transformations — rotation, reflection, shear, and scaling.",
            "ggb_app": "graphing",
            "steps": [
                "Define a triangle with vertices as column vectors",
                "Apply a 2×2 rotation matrix",
                "Observe the transformed triangle"
            ],
            "formulas": ["R(θ) = [[cosθ,-sinθ],[sinθ,cosθ]]", "det(A) = area scale factor"]
        },
        {
            "id": "mean-median-mode",
            "name": "Mean, Median & Mode",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Visualize central tendency measures on a dot plot. Drag data points to see stats update live.",
            "expression": "statistics",
            "steps": [
                "Enter a data list in Desmos",
                "Compute mean(list), median(list)",
                "Display on a number line"
            ],
            "formulas": ["Mean = Σxᵢ/n", "Median = middle value", "Mode = most frequent"]
        }
    ],
    "N": [
        {
            "id": "normal-distribution",
            "name": "Normal Distribution",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Plot the Gaussian bell curve. Explore how μ and σ control center and spread. Shade probability regions.",
            "expression": "y=(1/(sigma*sqrt(2*pi)))*e^(-(x-mu)^2/(2*sigma^2))",
            "steps": [
                "Plot the normal PDF with μ=0, σ=1",
                "Add sliders for μ and σ",
                "Shade the area between ±1σ (≈68%)"
            ],
            "formulas": ["f(x) = (1/σ√2π) e^(-(x-μ)²/2σ²)", "68-95-99.7 Rule"]
        },
        {
            "id": "number-theory",
            "name": "Number Theory Basics",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Visualize prime numbers, GCD, and modular arithmetic through number-line plots.",
            "expression": "primes",
            "steps": [
                "Plot all integers and mark primes",
                "Visualize GCD using Euclidean algorithm",
                "Explore modular patterns"
            ],
            "formulas": ["GCD(a,b) = GCD(b, a mod b)", "Euler's: aᵠ⁽ⁿ⁾ ≡ 1 (mod n)"]
        }
    ],
    "O": [
        {
            "id": "optimization",
            "name": "Optimization Problems",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Find maximum and minimum values using calculus. Visualize constrained and unconstrained optimization.",
            "expression": "y=-x^2+10x",
            "steps": [
                "Plot revenue R(x) = -x² + 10x",
                "Find R'(x) = 0 to locate the maximum",
                "Verify using the second derivative test"
            ],
            "formulas": ["f'(x) = 0 at extrema", "f''(x) < 0 → maximum", "f''(x) > 0 → minimum"]
        }
    ],
    "P": [
        {
            "id": "parabola",
            "name": "Parabola",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Explore vertex form, standard form, focus, and directrix of parabolas with live sliders.",
            "expression": "y=a(x-h)^2+k",
            "steps": [
                "Plot y = a(x-h)² + k with sliders",
                "Find vertex (h, k) and axis of symmetry",
                "Locate the focus: (h, k + 1/4a)"
            ],
            "formulas": ["y = a(x-h)² + k (vertex form)", "x² = 4py (focus-directrix form)"]
        },
        {
            "id": "probability",
            "name": "Probability",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Visualize probability distributions, simulate coin tosses, and explore the law of large numbers.",
            "expression": "probability distributions",
            "steps": [
                "Plot a discrete probability distribution",
                "Compute E(X) = Σ x·P(x)",
                "Plot the cumulative distribution function"
            ],
            "formulas": ["P(A∪B) = P(A) + P(B) - P(A∩B)", "E(X) = Σ x·P(x)"]
        },
        {
            "id": "parametric-curves",
            "name": "Parametric Curves",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Plot curves defined parametrically. Model projectile motion, Lissajous figures, and spirals.",
            "expression": "(cos(t), sin(t))",
            "steps": [
                "Enter x = cos(t), y = sin(t) in parametric mode",
                "Change to x = t·cos(t), y = t·sin(t) for a spiral",
                "Model projectile: x=v₀t, y=v₀t-½gt²"
            ],
            "formulas": ["x = f(t), y = g(t)", "dy/dx = (dy/dt)/(dx/dt)"]
        },
        {
            "id": "polynomials",
            "name": "Polynomials",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Plot polynomial functions and connect roots, factors, end behavior, and turning points visually.",
            "expression": "y=(x-1)(x+2)(x-3)",
            "steps": [
                "Plot y = (x-1)(x+2)(x-3) and identify roots",
                "Observe sign changes at each root",
                "Change multiplicities and see touching vs. crossing"
            ],
            "formulas": ["Degree n → at most n roots", "End behavior by leading term"]
        }
    ],
    "Q": [
        {
            "id": "quadratics",
            "name": "Quadratic Equations",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Solve and graph quadratic equations. Connect the discriminant to the number of x-intercepts.",
            "expression": "y=ax^2+bx+c",
            "steps": [
                "Plot y = x² - 5x + 6 and find the roots",
                "Use the quadratic formula with sliders",
                "Explore when Δ > 0, Δ = 0, Δ < 0"
            ],
            "formulas": ["x = (-b ± √(b²-4ac)) / 2a", "Δ = b² - 4ac"]
        },
        {
            "id": "quadrilaterals",
            "name": "Quadrilaterals",
            "tool": "geogebra",
            "difficulty": "Beginner",
            "description": "Construct and classify quadrilaterals. Verify properties of parallelograms, rhombuses, and trapezoids.",
            "ggb_app": "geometry",
            "steps": [
                "Construct a general quadrilateral ABCD",
                "Verify diagonals bisect each other → parallelogram",
                "Check if all sides equal → rhombus"
            ],
            "formulas": ["Parallelogram: opposite sides ||", "Rhombus: all sides equal"]
        }
    ],
    "R": [
        {
            "id": "regression",
            "name": "Regression Analysis",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Fit linear, quadratic, and exponential regression models to data. Understand residuals and R² visually.",
            "expression": "regression",
            "steps": [
                "Enter an (x,y) data table in Desmos",
                "Type y₁ ~ mx₁ + b for linear regression",
                "View the residual plot and R² value"
            ],
            "formulas": ["y = mx + b (linear)", "SSR = Σ(yᵢ-ŷᵢ)²", "R² = 1 - SSR/SST"]
        },
        {
            "id": "rates-of-change",
            "name": "Rates of Change",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Compare average and instantaneous rates of change. See secant lines become tangent lines visually.",
            "expression": "y=x^2",
            "steps": [
                "Plot f(x) = x² and pick a point a",
                "Draw the secant from (a, f(a)) to (a+h, f(a+h))",
                "Shrink h → 0 and watch it become the tangent"
            ],
            "formulas": ["Average: Δy/Δx", "Instantaneous: lim f'(x) as h→0"]
        }
    ],
    "S": [
        {
            "id": "series-sequences",
            "name": "Series & Sequences",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Visualize convergent and divergent series. Plot partial sums and explore geometric series visually.",
            "expression": "geometric series",
            "steps": [
                "Define aₙ = r^n with slider r",
                "Plot partial sums Sₙ = Σaₙ",
                "Observe convergence when |r| < 1"
            ],
            "formulas": ["Sₙ = a(1-rⁿ)/(1-r)", "S∞ = a/(1-r) when |r| < 1"]
        },
        {
            "id": "statistics-normal",
            "name": "Statistics & Distribution",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Compute standard deviation, variance, and visualize data spread around the mean.",
            "expression": "statistics",
            "steps": [
                "Enter a data list and compute stdev(list)",
                "Shade the area within 1 standard deviation",
                "Compare with a second dataset"
            ],
            "formulas": ["σ = √(Σ(xᵢ-μ)²/N)", "CV = σ/μ × 100%"]
        },
        {
            "id": "simultaneous-equations",
            "name": "Simultaneous Equations",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Solve systems of equations graphically. Find intersections of lines, circles, and parabolas.",
            "expression": "system of equations",
            "steps": [
                "Plot 2x + y = 7 and x - y = 2",
                "Find the intersection point",
                "Try a line and a circle system"
            ],
            "formulas": ["Intersection = solution set", "No intersection = no solution"]
        }
    ],
    "T": [
        {
            "id": "trigonometry",
            "name": "Trigonometry",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Graph sin, cos, tan and explore amplitude, period, phase shift. Connect to the unit circle.",
            "expression": "y=a*sin(bx+c)+d",
            "steps": [
                "Plot y = sin(x) and identify period 2π",
                "Add sliders: a (amplitude), b (frequency), c (phase)",
                "Compare sin and cos and explain the shift"
            ],
            "formulas": ["y = A·sin(Bx + C) + D", "Period = 2π/B", "Amplitude = |A|"]
        },
        {
            "id": "transformations-geometry",
            "name": "Geometric Transformations",
            "tool": "geogebra",
            "difficulty": "Intermediate",
            "description": "Apply reflections, rotations, translations, and dilations to shapes. Explore composition of transformations.",
            "ggb_app": "geometry",
            "steps": [
                "Draw a polygon and reflect across the y-axis",
                "Rotate 90° about the origin",
                "Compose two transformations and compare"
            ],
            "formulas": ["Rotation (90°): (x,y) → (-y,x)", "Reflection (x-axis): (x,y) → (x,-y)"]
        },
        {
            "id": "taylor-series",
            "name": "Taylor Series",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Build polynomial approximations for functions. Watch higher-degree polynomials converge to sin, cos, eˣ.",
            "expression": "Taylor of sin(x)",
            "steps": [
                "Plot sin(x) and its 1st-order Taylor: x",
                "Add 3rd order: x - x³/6",
                "Use a slider n to control number of terms"
            ],
            "formulas": ["f(x) ≈ Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ", "sin(x) = x - x³/3! + x⁵/5! - ..."]
        }
    ],
    "U": [
        {
            "id": "unit-circle",
            "name": "Unit Circle",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Explore the unit circle definition of trig functions. Watch sin and cos animate as the angle sweeps.",
            "expression": "x^2+y^2=1",
            "steps": [
                "Plot x² + y² = 1 (the unit circle)",
                "Add a point P = (cos(θ), sin(θ)) with a slider θ",
                "Drop perpendiculars to see sin and cos values"
            ],
            "formulas": ["sin²θ + cos²θ = 1", "tan θ = sin θ / cos θ", "(cos θ, sin θ) on unit circle"]
        }
    ],
    "V": [
        {
            "id": "vectors",
            "name": "Vectors",
            "tool": "geogebra",
            "difficulty": "Intermediate",
            "description": "Add, subtract, and scale vectors geometrically. Explore dot product, cross product, and vector decomposition.",
            "ggb_app": "graphing",
            "steps": [
                "Draw vectors a and b from the origin",
                "Construct a + b using the parallelogram law",
                "Compute and visualize the dot product"
            ],
            "formulas": ["a·b = |a||b|cosθ", "|a×b| = |a||b|sinθ", "Unit vector: â = a/|a|"]
        },
        {
            "id": "volumes-revolution",
            "name": "Volumes of Revolution",
            "tool": "desmos",
            "difficulty": "Advanced",
            "description": "Visualize solids formed by rotating curves. Use Disk and Shell methods to compute volumes.",
            "expression": "y=sqrt(x)",
            "steps": [
                "Plot y = √x from 0 to 4",
                "Imagine rotating around the x-axis",
                "Set up the disk integral: π∫y² dx"
            ],
            "formulas": ["V = π∫[f(x)]² dx (disk)", "V = 2π∫x·f(x) dx (shell)"]
        }
    ],
    "W": [
        {
            "id": "word-problems",
            "name": "Word Problems — Rates",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Model distance-rate-time, work, and mixture problems graphically to build intuition before algebra.",
            "expression": "d=r*t",
            "steps": [
                "Plot d = rt with sliders for r and t",
                "Model two objects moving toward each other",
                "Find when they meet graphically"
            ],
            "formulas": ["d = r·t", "Work = rate × time", "Combined rate: 1/a + 1/b"]
        }
    ],
    "X": [
        {
            "id": "x-intercepts",
            "name": "X-intercepts & Zeros",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Find zeros of functions graphically and connect to factored form. Explore multiplicity and behavior at roots.",
            "expression": "y=(x-1)(x+3)",
            "steps": [
                "Plot y = (x-1)(x+3) and identify zeros",
                "Notice crossing vs. touching at zeros",
                "Use the zero-finder tool to get exact values"
            ],
            "formulas": ["f(x) = 0 at x-intercepts", "Odd multiplicity → crosses", "Even → touches"]
        }
    ],
    "Y": [
        {
            "id": "y-intercept-behavior",
            "name": "Y-intercept & End Behavior",
            "tool": "desmos",
            "difficulty": "Beginner",
            "description": "Identify y-intercepts and describe end behavior for polynomials, exponentials, and rational functions.",
            "expression": "y=x^3-2x+1",
            "steps": [
                "Plot f(x) = x³ - 2x + 1",
                "Read off y-intercept at x = 0",
                "Zoom out to observe end behavior"
            ],
            "formulas": ["y-int = f(0)", "Odd degree: opposite end behavior", "Even degree: same ends"]
        }
    ],
    "Z": [
        {
            "id": "z-scores",
            "name": "Z-scores & Standard Deviation",
            "tool": "desmos",
            "difficulty": "Intermediate",
            "description": "Convert data to z-scores and shade probability regions under the normal curve using the standard normal table.",
            "expression": "normal distribution",
            "steps": [
                "Plot the standard normal N(0,1)",
                "Add a vertical line at z = 1.5",
                "Shade P(X < 1.5) region"
            ],
            "formulas": ["z = (x - μ) / σ", "P(-1.96 < z < 1.96) ≈ 95%"]
        }
    ]
}

def get_all_categories():
    return {letter: [{"id": t["id"], "name": t["name"], "tool": t["tool"], "difficulty": t["difficulty"]} for t in topics] for letter, topics in CATEGORIES.items()}

def get_topic_by_id(topic_id: str):
    for letter, topics in CATEGORIES.items():
        for topic in topics:
            if topic["id"] == topic_id:
                return topic
    return None
